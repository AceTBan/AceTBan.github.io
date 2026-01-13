// 🎯 On récupère les éléments HTML nécessaires au fonctionnement du bot
const chat = document.getElementById("acebot-chat");         // Zone où les messages du bot s'affichent
const options = document.getElementById("acebot-options");   // Zone où les boutons de choix apparaissent
const typing = document.getElementById("acebot-typing");     // Texte "AceBot écrit…" pour simuler l'attente

// 💬 Fonction pour afficher un message du bot avec un petit délai (effet "écriture")
function botMessage(text) {
  typing.style.display = "block"; // Affiche "AceBot écrit…"

  setTimeout(() => {
    typing.style.display = "none"; // Cache le texte après 600ms

    const msg = document.createElement("div"); // Crée une bulle de message
    msg.className = "bot-msg";                 // Applique le style CSS
    msg.textContent = text;                    // Ajoute le texte du bot
    chat.appendChild(msg);                     // Ajoute le message dans la zone de chat

    chat.scrollTop = chat.scrollHeight;        // Scroll automatique vers le bas
  }, 600);
}

// 🧠 Fonction pour afficher des boutons d'options interactifs
function showOptions(buttons) {
  options.innerHTML = ""; // Vide les anciens boutons

  buttons.forEach(btn => {
    const b = document.createElement("button"); // Crée un bouton
    b.textContent = btn.label;                 // Texte du bouton
    b.onclick = btn.action;                    // Action à exécuter au clic
    options.appendChild(b);                    // Ajoute le bouton dans la zone d'options
  });
}

// 🚀 Fonction principale qui lance la conversation avec AceBot
function startAceBot() {
  botMessage("Salut ! Je suis AceBot 🤖"); // Premier message

  setTimeout(() => botMessage("Comment puis‑je t’aider aujourd’hui ?"), 700); // Deuxième message

  setTimeout(() => {
    // Affiche les options après un petit délai
    showOptions([
      { label: "Un peu plus d'infos me concernat", action: () => redirect("linkedin") },
      { label: "Voir mes projets", action: () => redirect("github") },
      { label: "Me contacter", action: () => redirect("mail") },
      { label: "Télécharger mon CV", action: () => redirect("cv") }
    ]);
  }, 1200);
}

// 🔗 Fonction qui redirige vers les bons liens selon le choix de l'utilisateur
function redirect(type) {
  chat.innerHTML = ""; // Vide les anciens messages

  if (type === "linkedin") {
    botMessage("Je t’envoie vers mon LinkedIn !");
    window.open("https://www.linkedin.com/in/david-esteban-31-toulouse/", "_blank");
  }

  if (type === "github") {
    botMessage("Les voici mes projets !");
    window.open("https://github.com/AceTBan", "_blank");
  }

  if (type === "mail") {
    botMessage("Tu peux m’écrire directement.");
    window.location.href = "mailto:esteban_david@ymail.com";
  }

  if (type === "cv") {
    botMessage("Téléchargement du CV en cours...");
    window.open("https://drive.google.com/file/d/15E4ZPo8ODKchWPxzQe5JEHho598NiW1/view?usp=drivelink", "_blank");
  }
}

// 🟢 On lance le bot automatiquement dès que la page est prête
startAceBot();