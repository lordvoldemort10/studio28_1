from flask import Flask, render_template, request, redirect, url_for, flash
from flask_mail import Mail, Message

app = Flask(__name__)
app.secret_key = 'your_secret_key'

# Configuratie voor e-mailverzending
app.config['MAIL_SERVER'] = 'smtp.yourmailprovider.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = 'your-email@example.com'
app.config['MAIL_PASSWORD'] = 'your-email-password'
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False

mail = Mail(app)

@app.route('/contact', methods=['POST'])
def contact():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')
    
    if not name or not email or not message:
        flash('Alle velden zijn verplicht!')
        return redirect(url_for('index'))

    # E-mail verzenden naar de opgegeven ontvanger
    msg = Message("Nieuw contactformulier bericht", 
                  sender=email,
                  recipients=['info@studio28.com'])
    msg.body = f"Naam: {name}\nEmail: {email}\n\nBericht:\n{message}"
    
    try:
        mail.send(msg)
        flash('Bericht succesvol verzonden!')
    except Exception as e:
        flash(f'Er is een fout opgetreden: {str(e)}')
    
    return redirect(url_for('index'))

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)
