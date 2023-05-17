import os
import requests



def send_simple_message(email_to, subject, message):
    email_url = os.environ.get('API_EMAIL_URL')
    email_api_key = os.environ.get('API_EMAIL_KEY')
    
    print(email_url,email_api_key)
    print(email_to,subject,message)
    response = requests.post(
		f"{email_url}/messages",
		auth=("api", f"{email_api_key}"),
		data={"from": "Tetris-online <mailgun@YOUR_DOMAIN_NAME>",
			"to": [f"{email_to}"],
			"subject": f"{subject}",
			"text": f"{message}"})
    
    if response.status_code == 200:
        print('Correo enviado correctamente.')
    else:
        print(f'Error al enviar el correo: {response.content}')