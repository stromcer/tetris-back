from flask import Flask, request, jsonify, url_for, Blueprint
from src.database import User
from src.utils.routes.create_user import create_user
from src.utils.routes.user_login import user_login
from src.utils.routes.get_private_info import get_private_info_by_id
from flask_jwt_extended import jwt_required , create_access_token, get_jwt_identity



api = Blueprint('api', __name__)

@api.route("/singup", methods=["POST"])
def singup():
    try:
        request_body = request.json
        response = create_user(request_body)    
        return jsonify(response),201
    
    except KeyError as e:
        if "nickname" in e.__repr__():
            return jsonify({"message":"Missing nickname","code":"nickname"}),400
        elif "name" in e.__repr__():
            return jsonify({"message":"Missing name","code":"name"}),400
        elif "email" in e.__repr__():
            return jsonify({"message":"Missing email","code":"email"}),400
        elif "password" in e.__repr__():
            return jsonify({"message":"Missing password","code":"password"}),400
        else:
            return jsonify({"message":"Invalid body"}),400
        
        
        ## MIRAR LA CLAVE DE ERROR CORRECTA Y RESERVAR EL EXCEPT SIN NADA PARA EL CODE 500
    except :
        return jsonify({"message":"Email or nickname already exists","code":"email / nickname"}),403
    
    
@api.route("/login", methods=["POST"])
def login():
    try:
        request_body = request.json
        response = user_login(request_body)
        return response
        
    except KeyError as e:   
        if  "email" in e.__repr__():
            return jsonify({"message":"Missing email","code":"email"}),400
        elif "password" in e.__repr__():
            return jsonify({"message":"Missing password","code":"password"}),400
        
@api.route("/user/info", methods=["GET"])
@jwt_required()
def user_info():
    token_info = get_jwt_identity()
    response = get_private_info_by_id(token_info["id"])
    return jsonify(response)

@api.route("/user/list", methods=["GET"])
@jwt_required()
def get_user_list():
    users = User.query.all()
    response = [ user.serialize() for user in users ]
    return jsonify({"message":"ok","data":response}),200