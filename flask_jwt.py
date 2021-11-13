from flask import make_response,redirect,url_for
from flask_jwt_extended import (JWTManager, jwt_required, get_jwt_identity,
                                create_access_token, create_refresh_token, 
                                set_access_cookies, set_refresh_cookies, 
                                unset_jwt_cookies,unset_access_cookies,current_user)

def assign_access_refresh_tokens(user_id, url):
    access_token = create_access_token(identity=user_id)
    refresh_token = create_refresh_token(identity=user_id)
    resp = make_response(redirect(url_for(url), 200))
    set_access_cookies(resp, access_token)
    set_refresh_cookies(resp, refresh_token)
    return resp

def unset_jwt():
    resp = make_response(redirect(url_for('index'), 302))
    unset_jwt_cookies(resp)
    return resp

