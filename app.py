from flask import Flask,make_response,redirect,request
from flask.helpers import flash
from flask.templating import render_template
from werkzeug.datastructures import HeaderSet
from flask_jwt import *
from Crypto import Random
from database import *
from models import *
from flask_socketio import SocketIO,join_room,leave_room
import ujson
from sqlalchemy import and_

app = Flask(__name__)
app.config.from_object('config')
jwt = JWTManager(app)

db.app = app
db.init_app(app)

socketio = SocketIO(app)

db.create_all()

@jwt.unauthorized_loader
def unauthorized_callback(callback):
    # No auth header
    return redirect(url_for('signup'), 302)

@jwt.token_verification_failed_loader
def token_verification_failed_callback(callback):
    # Invalid Fresh/Non-Fresh Access token in auth header
    resp = make_response(redirect(url_for('signup')))
    unset_jwt_cookies(resp)
    return resp, 302

@jwt.expired_token_loader
def expired_token_callback(header,callback):
    # Expired auth header
    print("----------expired_token_loader--------------")
    print(header)
    resp = make_response(redirect(url_for('refresh')))
    unset_access_cookies(resp)
    return resp, 302

@jwt.user_identity_loader
def user_identity_lookup(user):
    print("------------------------user_identity_lookup----------------------------")
    print(user)
    return user

@jwt.user_lookup_loader
def user_lookup_callback(_jwt_header, jwt_data):
    identity = jwt_data["sub"]
    print("----------------------------user_lookup_callback--------------------------")
    print(jwt_data)
    return User.query.filter_by(id=identity).one_or_none()


@app.route('/')
def index():
    return "hello world!"

@app.route('/signup/', methods=['GET','POST'])
def signup():
    if request.method == "GET":
        return render_template('signup.html'),400
    
    uname = request.form.get('username')
    password = request.form.get('password')
    public_key = request.form.get('public_key')

    user = User.query.filter_by(username=uname).one_or_none()

    if not user:
        salt = Random.new().read(32)
        b_pw = str.encode(password)
        b_pw = salt + b_pw
        h = SHA256.new(b_pw)
        h_pw = h.hexdigest()
        db.session.add(User(username=uname, hs_password=h_pw,salt=salt.hex(),public_key=public_key))
        db.session.commit()

        flash("Signup Successfully")
        return redirect(url_for('login')),400
    else:
        flash("Username is already exit")

    return render_template('signup.html'),400

@app.route('/token/refresh/', methods=['GET'])
@jwt_required(refresh=True)
def refresh():
    # Refreshing expired Access token
    user_id = get_jwt_identity()
    access_token = create_access_token(identity=str(user_id))
    resp = make_response(redirect(url_for('index'), 302))
    set_access_cookies(resp, access_token)
    return resp

@app.route('/login/', methods=['POST','GET'])
def login():

    if request.method == "GET":
        return render_template('login.html'),400

    # Verify uid and password
    username = request.form.get('username')
    password = request.form.get('password')


    user = User.query.filter_by(username=username).one_or_none()

    if user and user.check_password(password):

        return assign_access_refresh_tokens(user.id , 'index')

    flash("Incorrect Username or Password.")
    return render_template('login.html'),400

@app.route('/logout/')
@jwt_required()
def logout():
    # Revoke Fresh/Non-fresh Access and Refresh tokens
    return unset_jwt(), 302

@app.route('/history/', methods=['POST'])
@jwt_required()
def services():

    data = request.get_json()
    target = data['target']
    sent_datetime = data['sent_datetime']
    received_datetime = data['received_datetime']
    username = current_user.username

    sent_msg = History.query.filter(\
        and_(History.from_username==username,History.to_username==target,History.datetime>sent_datetime))\
        .order_by(History.datetime).all()
    
    received_msg = History.query.filter(\
        and_(History.from_username==target,History.to_username==username,History.datetime>received_datetime))\
        .order_by(History.datetime).all()

    return str(id),400

@app.route('/chat/')
@jwt_required()
def chat():
    return render_template('chat.html')

@app.route('/public_keys/',methods=['POST'])
@jwt_required()
def public_keys():
    print('----------public_keys---------')
    print(request.json)
    print(request.data)
    print(request.get_json())
    
    username = request.get_json()['username']
    print("username: ",username)

    if username == None:
        return "No username provided", 400

    # username = data['username']
    

    user = User.query.filter_by(username=username).one_or_none()
    print("user public key: ",user.public_key)
    if user:
        return str(user.public_key),200
    else:
        return "user does not exit", 400

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
    socketio.emit('all',username + ' has entered the room.')
    print(username + ' has entered the room.')

@socketio.on('leave')
@jwt_required()
def on_leave(data):
    username = current_user.username
    room = username + "'s room"
    leave_room(room)
    socketio.emit('all',username + ' has left the room.')
    print(username + ' has left the room.')

@socketio.on('message')
@jwt_required()
def on_message(data):
    print("-------message--------")
    print(data)
    to = data['to']
    room = to + "'s room"

    db.session.add(History(from_username=current_user.username,to_username=to,data=ujson.dumps(data)))
    db.session.commit()

    socketio.send({'from':current_user.username,'data': data}, broadcast=True, to=room)

    




if __name__ == "__main__":
    socketio.run(app)