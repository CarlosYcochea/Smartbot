from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('chat.html')

@app.route('/send_message', methods=['POST'])
def send_message():
    user_message = request.json['message'].lower()

    # Respuestas simples
    if 'hola' in user_message:
        bot_reply = "👋 ¡Hola! Soy SmartBot, tu asistente virtual. ¿En qué puedo ayudarte hoy?"
    elif 'precio' in user_message:
        bot_reply = "💰 Nuestros precios varían según el producto. ¿Podrías especificar cuál te interesa?"
    elif 'horario' in user_message:
        bot_reply = "🕒 Atendemos de lunes a sábado de 9:00 a 19:00 hrs."
    elif 'ubicación' in user_message or 'dónde' in user_message:
        bot_reply = "📍 Estamos ubicados en Av. Principal #123, Quilicura."
    elif 'gracias' in user_message:
        bot_reply = "😊 ¡Con gusto! Si necesitas algo más, aquí estaré."
    else:
        bot_reply = "🤖 Disculpa, aún estoy aprendiendo. ¿Podrías escribirlo de otra forma?"

    return jsonify({'reply': bot_reply})

if __name__ == '__main__':
    app.run(debug=True)
