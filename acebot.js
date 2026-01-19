// Récupération des éléments HTML
const chat = document.getElementById("acebot-chat");
const options = document.getElementById("acebot-options");
const typing = document.getElementById("acebot-typing");

// Fonction pour afficher un message du bot avec effet "lettre par lettre"
function botMessage(text) {
  typing.style.display = "block";

  setTimeout(() => {
    typing.style.display = "none";

    // Conteneur du message + avatar
    const msg = document.createElement("div");
    msg.className = "bot-msg";

    // Avatar du bot
    const avatar = document.createElement("div");
    avatar.className = "bot-avatar";
    avatar.textContent = "🤖"; // mettre une image ou autre ici comme avatar

    // Texte du message
    const bubble = document.createElement("div");
    bubble.className = "bot-bubble";

    msg.appendChild(avatar);
    msg.appendChild(bubble);
    chat.appendChild(msg);

    // Effet de frappe
    let index = 0;
    const interval = setInterval(() => {
      bubble.textContent += text[index];
      index++;

      if (index >= text.length) {
        clearInterval(interval);
      }

      chat.scrollTop = chat.scrollHeight;
    }, 25);
  }, 400);
}

// Affichage des options
function showOptions(buttons) {
  options.innerHTML = ""; // Vide les anciens boutons

  buttons.forEach((btn, index) => {
    setTimeout(() => {
      const b = document.createElement("button");
      b.textContent = btn.label;
      b.onclick = btn.action;
      b.className = "option-animated"; // Classe pour l'effet CSS
      options.appendChild(b);
    }, index * 300); // Décalage de 300ms entre chaque bouton
  });
}

// Démarrage du bot 
function startAceBot() {
  botMessage("Salut c'est moi AceBot à votre service ^^ ");
  setTimeout(() => botMessage("En quoi puis‑je aider ?"), 900);

  setTimeout(() => {
    showOptions([
      { label: "En savoir plus le concernat ? ", action: () => redirect("linkedin") },
      { label: "Voir d'anvantage ses projets ?", action: () => redirect("github") },
      { label: "Le contacter directement ?", action: () => redirect("mail") },
      { label: "Télécharger son CV ?", action: () => redirect("cv") }
    ]);
  }, 1800);
}

// Redirections
function redirect(type) {
  chat.innerHTML = "";

  if (type === "linkedin") {
    botMessage("Pas de souci, c'est moi AceBot à votre service!! Je vous envoie vers son LinkedIn .");
    window.open("https://www.linkedin.com/in/david-esteban-31-toulouse/", "_blank");
  }

  if (type === "github") {
    botMessage("Redirection vers son GitHub imminent, c'est moi AceBot à votre service !!");
    window.open("https://github.com/AceTBan", "_blank");
  }

  if (type === "mail") {
    botMessage("Vous pouvez dès à présent lui écrire un mail. À votre service !!");
    window.location.href = "mailto:esteban_david@ymail.com";
  }

  if (type === "cv") {
    botMessage("Téléchargement du CV en cours... c'est moi AceBot ");
    window.open("https://drive.google.com/file/d/1ivZ9LWlDYNaaTuh6DVKEI9nkwzju3__X/view?usp=sharing", "_blank");
  }
}

// Lancement
startAceBot();