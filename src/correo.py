import smtplib

# Estableciendo conexion al servidor de correos SMTP
conexion = smtplib.SMTP(host='smtp.gmail.com', port=587)
conexion.ehlo()

# Encriptacion TLS
conexion.starttls()

# Iniciar sesion en el servidor SMTP
conexion.login(user = 'proyecto.tetris.test@gmail.com', password = 'tester123456')

# Enviar correo
mensaje = 'Esto es una prueba'
conexion.sendmail(from_addr = 'proyecto.tetris.test@gmail.com', to_addrs='christopherjavier1998@gmail.com', msg= mensaje)

# Desconeccion del servidor SMTP
conexion.quit()