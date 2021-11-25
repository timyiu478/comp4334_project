from datetime import timedelta

with open('jwt_secret_key.txt','r') as f:
    jwt_secret_key = f.read()
    
with open('database_url.txt','r') as f:
    database_url = f.read()

with open('flask_session_secret_key.txt','r') as f:
    flask_session_secret_key = f.read()

with open('redis_url.txt','r') as f:
    redis_url = f.read()

SECRET_KEY = flask_session_secret_key

SEND_FILE_MAX_AGE_DEFAULT = 0

JWT_SECRET_KEY = jwt_secret_key
JWT_TOKEN_LOCATION = ['cookies']
JWT_COOKIE_CSRF_PROTECT = True
JWT_CSRF_CHECK_FORM = True
JWT_COOKIE_SECURE = True # Controls if the secure flag should be placed on cookies created by this extension. If a cookie is marked as secure it will only be sent by the web browser over an HTTPS connection
JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)
JWT_REFRESH_TOKEN_EXPIRES = timedelta(days=30)

PROPAGATE_EXCEPTIONS = True

SQLALCHEMY_DATABASE_URI = database_url
SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_ECHO = False

REDIS_URL = redis_url
