from flask import Flask, jsonify, render_template
from database import db
from admin import setup_admin
from routes import api
from flask_socketio import SocketIO, send

# INICIAMOS APP
app = Flask(__name__)

# Configuracion BBDD 
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"
db.init_app(app)

# Configuracion socketIO
app.config["SECRET_KEY"] ='secret'
socketio = SocketIO(app)

@socketio.on('message')
def handleMessage(msg):
    print("Message: " + msg)
    send(msg, broadcast = True)

# Creamos las tablas de la BBDD (Si no estan creadas)
with app.app_context():
    db.create_all()

# Iniciamos el admin
setup_admin(app)

# Iniciamos la blueprint "api"
app.register_blueprint(api, url_prefix='/api')

##PARTE PARA RUTAS
@app.route("/")
def test():
    return jsonify("Hola")

@app.route("/chat")
def index():
    return render_template('index.html')

## NO ESCRIBIR CODIGO DEBAJO DE ESTA LINEA.
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3245, debug=True)