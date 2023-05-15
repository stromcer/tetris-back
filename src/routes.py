from flask import Flask, request, jsonify, url_for, Blueprint
from src.database import User, Score, db
from src.utils.routes.create_user import create_user
from src.utils.routes.user_login import user_login
from src.utils.routes.get_private_info import get_private_info_by_id
from src.utils.routes.create_score import create_score
from src.utils.routes.get_user_scores import get_user_scores_by_id
from flask_jwt_extended import jwt_required , get_jwt_identity
from src.utils.routes.lobbys.Lobbys import LobbyManager
from src.utils.routes.get_highscores import get_top_scores
from src.correo import send_simple_message
import random
import string
import bcrypt

active_lobbys = LobbyManager()

api = Blueprint('api', __name__)

@api.route("/singup", methods=["POST"])
def singup():
    try:
        request_body = request.json
        response = create_user(request_body)    
        return jsonify({"message":"ok","data":response}),201
    
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
        if "email" in e.__repr__():
            return jsonify({"message":"Missing email","code":"email"}),400
        elif "password" in e.__repr__():
            return jsonify({"message":"Missing password","code":"password"}),400
        
@api.route("/user/info", methods=["GET"])
@jwt_required()
def get_user_info():
    token_info = get_jwt_identity()
    response = get_private_info_by_id(token_info["id"])
    return jsonify({"data": response, "message":"ok"}),200

@api.route("/user/list", methods=["GET"])
@jwt_required()
def get_user_list():
    users = User.query.all()
    response = [ user.serialize() for user in users ]
    return jsonify({"message":"ok","data":response}),200

@api.route("/user/newscore", methods=["POST"])
@jwt_required()
def new_score_user():
    user_info = get_jwt_identity()
    new_score = request.json
    response = create_score(user_info["id"], new_score)
    return jsonify({"message":"ok","data":response}),200

@api.route("/user/scores", methods=["GET"])
@jwt_required()
def get_scores():
    user_info = get_jwt_identity()
    response = get_user_scores_by_id(user_info["id"])
    return jsonify({"message":"ok","data":response}),200

@api.route("/leaderboard", methods=["GET"])
def get_leaderboard():
    response = get_top_scores()    
    
    return jsonify({"message":"ok","data":response}),200






# RUTAS PARA LOBBYS 

@api.route("/lobbys")
def send_lobbys():
    response = active_lobbys.get_lobbys()
    return jsonify({"message":"ok","data":response}),200

@api.route("/lobbys/create/<lobby_id>")
@jwt_required()
def new_lobby(lobby_id):
    try:
        response = active_lobbys.create_lobby(lobby_id)
        return jsonify({"message":"ok","data":response}),200
    except:
        return jsonify({"message":"Nombre de sala duplicada.","code":"Lobby_name_exists"}),400
    
@api.route("/lobbys/join/<lobby_id>")
@jwt_required()
def handle_join_lobby(lobby_id):
    user_info = get_jwt_identity()
    print(user_info)
    try:
        response = active_lobbys.join_lobby(lobby_id, user_info["nickname"])
        return jsonify({"message":"ok","data":response}),200
    except:
        return jsonify({"message":"La sala esta llena","code":"Lobby_full"}),400

@api.route("/lobbys/leave/<lobby_id>")
@jwt_required()
def handle_leave_lobby(lobby_id):
    user_info = get_jwt_identity()
    response = active_lobbys.leave_lobby(lobby_id,user_info["nickname"])
    return jsonify({"message":"ok","data":response}),200


@api.route("/lobbys/get/<lobby_id>")
@jwt_required()
def get_lobby(lobby_id):
    response = active_lobbys.get_lobby_by_id(lobby_id)
    return jsonify({"message":"ok","data":response}),200

@api.route("/recover_password", methods=["POST"])
def recover_password():
    try:
        email = request.json["email"]
        caracteres = string.ascii_letters + string.digits + string.punctuation
        new_password = ''.join(random.choice(caracteres) for i in range(8))
        user = User.query.filter_by(email=email).first()
        hashed_password = bcrypt.hashpw(new_password.encode('utf-8'), bcrypt.gensalt())
        user.password = hashed_password
        db.session.commit()
        send_simple_message(email,"TETRIS-ONLINE || RESTAURAR CONTRASEñA",f"Su nueva contraseña es:'  {new_password}  '. Por motivos de seguridad le recomendamos cambiarla al iniciar sesion.")
        return jsonify({"message":"ok","data":"Contraseña restaurada, revise el correo electronico."}),200
    except:
        return jsonify({"message":"ok","data":"Contraseña restaurada, revise el correo electronicoNO."}),200