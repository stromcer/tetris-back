from email.message import EmailMessage
import smtplib

remitente = "direccion@gmail.com"
destinatario = "destinatario@ejemplo.com"
mensaje = "¡Hola, mundo!"
email = EmailMessage()
email["From"] = remitente
email["To"] = destinatario
email["Subject"] = "Correo de prueba"
email.set_content(mensaje)
smtp = smtplib.SMTP_SSL("smtp.gmail.com")
smtp.login(remitente, "clave_de_gmail_123")
smtp.sendmail(remitente, destinatario, email.as_string())
smtp.quit()