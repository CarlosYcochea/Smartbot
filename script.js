const chatBox = document.getElementById("chat-box");

function scrollToBottom() {
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  // Mensaje del usuario
  chatBox.innerHTML += `<div class='user-msg'><div class='msg-bubble user'>${message}</div></div>`;
  scrollToBottom();
  input.value = "";

  // "Escribiendo..."
  const typing = document.createElement("div");
  typing.className = "bot-msg";
  typing.innerHTML = "<div class='msg-bubble bot typing'>SmartBot está escribiendo...</div>";
  chatBox.appendChild(typing);
  scrollToBottom();

  setTimeout(() => {
    chatBox.removeChild(typing);

    let reply = "";
    const msg = message.toLowerCase();

    if (msg.includes("hola")) reply = "👋 ¡Hola! Soy SmartBot, tu asistente virtual. ¿En qué puedo ayudarte hoy?";
    else if (msg.includes("precio")) reply = "💰 Nuestros precios varían según el producto. ¿Podrías especificar cuál te interesa?";
    else if (msg.includes("horario")) reply = "🕒 Atendemos de lunes a sábado de 9:00 a 19:00 hrs.";
    else if (msg.includes("ubicación") || msg.includes("dónde")) reply = "📍 Estamos ubicados en Av. Principal #123, Quilicura.";
    else if (msg.includes("gracias")) reply = "😊 ¡Con gusto! Si necesitas algo más, aquí estaré.";
    else reply = "🤖 Disculpa, aún estoy aprendiendo. ¿Podrías escribirlo de otra forma?";

    chatBox.innerHTML += `<div class='bot-msg'><div class='msg-bubble bot'>${reply}</div></div>`;
    scrollToBottom();
  }, 1000);
}
