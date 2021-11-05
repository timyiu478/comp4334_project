with open('jwt_secret_key.txt','r') as f:
    jwt_secret_key = f.read()
    
JWT_SECRET_KEY = jwt_secret_key
JWT_TOKEN_LOCATION = 'cookies'
JWT_COOKIE_CSRF_PROTECT = True
JWT_CSRF_CHECK_FORM = True