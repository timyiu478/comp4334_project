from flask import Flask,make_response,redirect,request,send_from_directory
from flask.wrappers import Response
from flask_jwt import *
from Crypto import Random
from database import *
from models import *
from flask_socketio import SocketIO,join_room,leave_room, send
from sqlalchemy import and_,or_
from flask_sslify import SSLify
from flask_cors import CORS
from flask_redis import FlaskRedis
from flask_jwt_extended import get_jwt
from datetime import datetime,timedelta,timezone

app = Flask(__name__,static_folder = "client/build",static_url_path="/")
app.config.from_object('config')

jwt = JWTManager(app)

sslify = SSLify(app)

CORS(app)

redis_client = FlaskRedis(app)

db.app = app
db.init_app(app)

socketio = SocketIO(app)

db.create_all()


@app.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers['X-XSS-Protection'] = '1; mode=block'

    return r

@jwt.unauthorized_loader
def unauthorized_callback(callback):
    # No auth header
    # return redirect(url_for('signup'), 302)
    return jsonify({'authorized':False}),302

@jwt.token_verification_failed_loader
def token_verification_failed_callback(callback):
    # Invalid Fresh/Non-Fresh Access token in auth header
    resp = jsonify({'authorized':False}),302
    unset_jwt_cookies(resp)
    return resp

@jwt.expired_token_loader
def expired_token_callback(header,payload):
    # Expired auth header
    print("----------expired_token_loader--------------")
    print(header)
    print(payload)
    resp = make_response(redirect(url_for('refresh')))
    unset_access_cookies(resp)
    return resp, 302

@jwt.user_identity_loader
def user_identity_lookup(user):
    # print("------------------------user_identity_lookup----------------------------")
    # print(user)
    return user

@jwt.user_lookup_loader
def user_lookup_callback(_jwt_header, jwt_data):
    identity = jwt_data["sub"]
    # print("----------------------------user_lookup_callback--------------------------")
    # print(jwt_data)
    return User.query.filter_by(id=identity).one_or_none()



@app.route('/')
@app.route('/chatpage/')
@app.route('/login/')
def index():
    resp = make_response(send_from_directory(app.static_folder,'index.html'),200)    
    return resp
    



@app.route('/api/signup/', methods=['POST'])
def signup():
    # if request.method == "GET":
    #     return render_template('signup.html'),400

    data = request.get_json()

    uname = data['username']
    password = data['password']
    public_key = data['public_key']

    user = User.query.filter_by(username=uname).one_or_none()

    if not user:
        salt = Random.new().read(32)
        b_pw = str.encode(password)
        b_pw = salt + b_pw
        h = SHA256.new(b_pw)
        h_pw = h.hexdigest()
        db.session.add(User(username=uname, hs_password=h_pw,salt=salt.hex(),public_key=public_key))
        db.session.commit()

        # flash("Signup Successfully")
        # return redirect(url_for('login')),200
        return {"status":"success","msg":"signup successfully"},200
    else:
        # flash("Username is already exit")
        return {"status":"failed","msg":"Username is already exit"},400

    # return render_template('signup.html'),400

@app.route('/api/token/refresh/', methods=['GET'])
@jwt_required(refresh=True)
def refresh():
    # Refreshing expired Access token
    user_id = get_jwt_identity()
    access_token = create_access_token(identity=user_id, fresh=False)
    resp = jsonify({'refresh': True})
    set_access_cookies(resp, access_token)
    return resp,200

@app.route('/api/login/', methods=['POST'])
def login():

    # if request.method == "GET":
    #     return render_template('login.html'),400

    # Verify uid and password
    # username = request.form.get('username')
    # password = request.form.get('password')

    data = request.get_json()
    username = data['username']
    password = data['password']

    # print("-------login-----------")
    # print(data)

    user = User.query.filter_by(username=username).one_or_none()

    if user and user.check_password(password):

        return assign_access_refresh_tokens(user.id)

    # flash("Incorrect Username or Password.")
    return {"status":"failed","msg":"Incorrect Username or Password."},400

@app.route('/api/logout/')
@jwt_required()
def logout():
    # Revoke Fresh/Non-fresh Access and Refresh tokens
    return unset_jwt(), 200

@app.route('/api/history/', methods=['POST'])
@jwt_required()
def services():

    data = request.get_json()
    target = data['target']
    start_message_index = data['start_message_index']
    username = current_user.username

    if target == None: return "No contact name provided.",400


    msgs = redis_client.get(target+username)
    # msgs = None
    if msgs == None:
        msgs = History.query.filter(\
            or_(and_(History.from_username==username,History.to_username==target),\
            and_(History.from_username==target,History.to_username==username)))\
            .order_by(History.datetime.desc()).all()

        msgs = [msg.get_json() for msg in msgs[start_message_index:start_message_index+50]][::-1]
        redis_client.set(target+username,ujson.dumps({'msgs':msgs}),3)
    else:
        msgs = ujson.loads(msgs)['msgs']

    print("--------- history ----------------")
    # print(data)
    print(msgs)

    return {'msgs': msgs},200

# @app.route('/chat/')
# @jwt_required()
# def chat():
#     return render_template('chat.html')

@app.route('/api/public_keys/',methods=['POST'])
@jwt_required()
def public_keys():
    # print('----------public_keys---------')
    # print(request.json)
    # print(request.data)
    # print(request.get_json())
    
    username = request.get_json()['username']
    # print("username: ",username)

    if username == None:
        return "No username provided", 400

    # username = data['username']
    

    user = User.query.filter_by(username=username).one_or_none()
    # print("user public key: ",user.public_key)
    if user:
        return str(user.public_key),200
    else:
        return "user does not exit", 400

@app.route('/api/usernames/')
@jwt_required()
def usernames():
    usernames = User.query.with_entities(User.username).all()
    # print("---------usernames------------")
    # print(usernames)

    return {'usernames': [user.username for user in usernames]},200

@socketio.on('connect')
@jwt_required()
def test_connect(auth):
    socketio.emit('connect', {'data': 'Connected'})

@socketio.on('join')
@jwt_required()
def on_join(data):
    username = current_user.username
    room = username + "'s room"
    join_room(room)
    # socketio.emit('all',username + ' has entered the room.')
    # print(username + ' has entered the room.')

# @socketio.on('leave')
# @jwt_required()
# def on_leave(data):
#     username = current_user.username
#     room = username + "'s room"
#     leave_room(room)
#     # socketio.emit('all',username + ' has left the room.')
#     print(username + ' has left the room.')

@socketio.on('message')
@jwt_required()
def on_message(data):

    print("-------message--------")
    print("current user: ", current_user.username)
    print(data)

    to = data['to']
    to_room = to + "'s room"

    from_room = current_user.username + "'s room"

    now = datetime.utcnow().isoformat()
    # print("datetime:",now)

    message = {'datetime':now,'from':current_user.username,'data': data}

    socketio.send(message, to=to_room)
    socketio.send(message, to=from_room)

    db.session.add(History(from_username=current_user.username,to_username=to,data=ujson.dumps(data),datetime_str=now))
    db.session.commit()



    




if __name__ == "__main__":
    socketio.run(app,message_queue=app.config["REDIS_URL"], cors_allowed_origins='*')