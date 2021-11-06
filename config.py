with open('jwt_secret_key.txt','r') as f:
    jwt_secret_key = f.read()
    
with open('database_url.txt','r') as f:
    database_url = f.read()

with open('flask_session_secret_key.txt','r') as f:
    flask_session_secret_key = f.read()

SECRET_KEY = flask_session_secret_key

JWT_SECRET_KEY = jwt_secret_key
JWT_TOKEN_LOCATION = 'cookies'
JWT_COOKIE_CSRF_PROTECT = True
JWT_CSRF_CHECK_FORM = True

SQLALCHEMY_DATABASE_URI = database_url
SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_ECHO = True