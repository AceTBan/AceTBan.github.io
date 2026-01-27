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
};

// Affichage des options
function showOptions(buttons) {
  options.innerHTML = "";

  buttons.forEach(btn => {
    const b = document.createElement("button");
    b.textContent = btn.label;

    b.onclick = () => {
      userMessage(btn.label);   // Affiche la réponse dans la bulle utilisateur
      btn.action();             // Exécute l’action associée
    
    };

    options.appendChild(b);
  });
};

// Démarrage du bot 
function startAceBot() {
  botMessage("Salut c'est moi AceBot à votre service ^^ ");
  setTimeout(() => botMessage("En quoi puis‑je aider ?"), 2000);

  setTimeout(() => {
    showOptions([
      { label: "En savoir plus sur son parcours. ", action: () => redirect("linkedin") },
      { label: "Voir d'anvantage ses projets.", action: () => redirect("github") },
      { label: "Le contacter directement.", action: () => redirect("mail") },
      { label: "Voir son CV.", action: () => redirect("cv") },
      { label: "Objectif professionnel.", action: () => redirect("objectif") },
      { label: "Compétences techniques", action: () => redirect("skills") },


    ]);
  }, 1800);
};

// Redirections
function redirect(type) {
//  chat.innerHTML = "";          // Vide l'historique conversationnel

  if (type === "linkedin") {
    botMessage("Pas de souci, c'est moi AceBot à votre service!! Je vous envoie vers son LinkedIn .");
      // L’action est décalée APRÈS la réponse du bot
  setTimeout(() => {
    window.open("https://www.linkedin.com/in/david-esteban-31-toulouse/", "_blank");
  }, 4000);
}

  if (type === "github") {
    botMessage("Redirection vers son GitHub imminent, c'est moi AceBot à votre service !!");
      // L’action est décalée APRÈS la réponse du bot
  setTimeout(() => {
    window.open("https://github.com/AceTBan", "_blank");
  }, 4000);
}

  if (type === "mail") {
    botMessage("Vous pouvez dès à présent lui écrire un mail. À votre service !!");
      // L’action est décalée APRÈS la réponse du bot
  setTimeout(() => {
    window.location.href = "mailto:esteban_david@ymail.com";
  }, 4000);
}

  if (type === "cv") {
    botMessage("Consultation du CV complet en cours... c'est moi AceBot ");
      // L’action est décalée APRÈS la réponse du bot
  setTimeout(() => {
    window.open("https://drive.google.com/file/d/1ivZ9LWlDYNaaTuh6DVKEI9nkwzju3__X/view?usp=sharing", "_blank");
  }, 4000);
}

if (type === "objectif") {
  botMessage("L’objectif est de décrocher une alternance en développement web ou en Conception et Développement d’Applications à partir de mars 2026. Intégrer une entreprise qui valorise l’autonomie, la montée en compétences et les projets concrets serait un véritable plus.");          // Message du bot 

  // Option supplementaire proposer après le message ...
  setTimeout(() => {
    showOptions([
      // Redirection vers les compétences
      { label: "En savoir plus sur son parcours.", action: () => redirect("linkedin") },

      // Redirection vers les projets
      { label: "Voir d'anvantage ses projets.", action: () => redirect("github") },

      // Retour au menu principal
      { label: "Revenir au menu principal", action: () => startAceBot() }
    ]);
  }, 800);
}

if (type === "skills") {
  // Message principal du bot : introduction aux compétences
  botMessage("Voici un aperçu des compétences techniques actuelles, qui sont en perpétuelle progression :");

  // Deuxième message avec la liste des compétences
  setTimeout(() => {
    botMessage(`
- Langages : HTML/CSS, JavaScript, Python, php, java .
- Frameworks : Bootstrap, React, Node.js .
- Bases de données : MySQL, MongoDB .
- Outils : Git, VS Code, Figma, Postman  ...
    `);
  }, 4000);

  // Suggestions après affichage des compétences
  setTimeout(() => {
    showOptions([
      // Redirection vers les projets pour voir les compétences en action
      { label: "Voir mes projets en action", action: () => redirect("projects") },

      // Redirection vers le CV
      { label: "Télécharger mon CV", action: () => redirect("cv") },

      // Retour au menu principal
      { label: "Revenir au menu principal", action: () => startAceBot() }
    ]);
  }, 1200); // on laisse un petit délai pour que les messages aient le temps d’apparaître
}
};


// Affiche un message utilisateur dans une bulle alignée à droite
function userMessage(text) {
  const msg = document.createElement("div");
  msg.className = "user-msg"; // Style défini dans le CSS
  msg.textContent = text;

  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight; // Scroll automatique
};


// Lancement
startAceBot();

// Dark mode 

const toggle = document.getElementById("theme-toggle");
const bot = document.getElementById("acebot");

toggle.onclick = () => {
  bot.classList.toggle("dark-mode");

  if (bot.classList.contains("dark-mode")) {
    toggle.textContent = "☀️";
  } else {
    toggle.textContent = "🌙";
  }
};