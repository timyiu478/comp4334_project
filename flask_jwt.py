from flask import make_response,redirect,url_for,jsonify
from flask_jwt_extended import (JWTManager, jwt_required, get_jwt_identity,
                                create_access_token, create_refresh_token, 
                                set_access_cookies, set_refresh_cookies, 
                                unset_jwt_cookies,unset_access_cookies,current_user)

def assign_access_refresh_tokens(user_id):
    access_token = create_access_token(identity=user_id, fresh=True)
    refresh_token = create_refresh_token(identity=user_id)
    resp = jsonify({'refresh': True})
    set_access_cookies(resp, access_token)
    set_refresh_cookies(resp, refresh_token)
    return resp,200

def unset_jwt():
    resp = make_response(url_for('index'),200)
    unset_jwt_cookies(resp)
    return resp

