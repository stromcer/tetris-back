from flask import Flask, request, jsonify, url_for, Blueprint
from src.database import db, User
from src.utils.routes.create_user import create_user




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
        user = User.query.filter_by(email=request_body["email"]).first()
        
        if user == None and not user.check_password(request_body["password"]):
            return jsonify({"message":"user / password missmatch","code":"missmatch"}),404
        else:
            response = user.serialize()
            return jsonify(response),201
        
    except KeyError as e:
        if  "email" in e.__repr__():
            return jsonify({"message":"Missing email","code":"email"}),400
        elif "password" in e.__repr__():
            return jsonify({"message":"Missing password","code":"password"}),400