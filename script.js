const chatBox = document.getElementById("chat-box");
const toggleTheme = document.getElementById("toggle-theme");
const chatContainer = document.getElementById("chat-container");
const loadingScreen = document.getElementById("loading-screen");

// Mostrar chat después de la carga
window.addEventListener("load", () => {
  setTimeout(() => {
    loadingScreen.style.display = "none";
    chatContainer.style.display = "flex";
  }, 3000);
});

// Auto-scroll
function scrollToBottom() {
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Enviar mensaje
function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  chatBox.innerHTML += `<div class='user-msg'><div class='msg-bubble user'>${message}</div></div>`;
  scrollToBottom();
  input.value = "";

  const typing = document.createElement("div");
  typing.className = "bot-msg";
  typing.innerHTML = "<div class='msg-bubble bot typing'>SmartBot está escribiendo...</div>";
  chatBox.appendChild(typing);
  scrollToBottom();

  setTimeout(() => {
    chatBox.removeChild(typing);
    const msg = message.toLowerCase();
    let reply = "";

    if (msg.includes("hola")) reply = "👋 ¡Hola! Soy SmartBot. ¿Cómo puedo ayudarte hoy?";
    else if (msg.includes("precio")) reply = "💰 Nuestros precios varían según el producto. ¿Podrías especificar cuál te interesa?";
    else if (msg.includes("horario")) reply = "🕒 Atendemos de lunes a sábado de 9:00 a 19:00 hrs.";
    else if (msg.includes("ubicación") || msg.includes("dónde")) reply = "📍 Estamos ubicados en Av. Principal #123, Quilicura.";
    else if (msg.includes("gracias")) reply = "😊 ¡Con gusto! Si necesitas algo más, aquí estaré.";
    else reply = "🤖 Lo siento, aún estoy aprendiendo. ¿Podrías reformular tu pregunta?";

    chatBox.innerHTML += `<div class='bot-msg'><div class='msg-bubble bot'>${reply}</div></div>`;
    scrollToBottom();
  }, 1000);
}

// Cambiar tema
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleTheme.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
