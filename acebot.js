// Récupération des éléments HTML
const chat = document.getElementById("acebot-chat");
const options = document.getElementById("acebot-options");
const typing = document.getElementById("acebot-typing");

// Fonction pour afficher un message du bot avec effet "lettre par lettre"
function botMessage(text) {
  typing.style.display = "block"; // Affiche "AceBot écrit…"

  setTimeout(() => {
    typing.style.display = "none"; // Cache "AceBot écrit…"

    const msg = document.createElement("div");
    msg.className = "bot-msg";

    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;

    // Effet de frappe : on ajoute le texte caractère par caractère
    let index = 0;
    const interval = setInterval(() => {
      msg.textContent += text[index]; // Ajoute une lettre
      index++;

      if (index >= text.length) {
        clearInterval(interval); // Stoppe l'intervalle quand tout est écrit
      }

      chat.scrollTop = chat.scrollHeight; // Garde le scroll en bas
    }, 25); // Vitesse de frappe (25ms par lettre plus le nbr est petit plus il est rapide)
  }, 400); // Petit délai avant de commencer à écrire
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
  botMessage("Salut moi c'est AceBot à votre service ^^ ");
  setTimeout(() => botMessage("Comment puis‑je aider aujourd’hui ?"), 900);

  setTimeout(() => {
    showOptions([
      { label: "En savoir plus le concernant ", action: () => redirect("linkedin") },
      { label: "Voir ses projets", action: () => redirect("github") },
      { label: "Le contacter directement", action: () => redirect("mail") },
      { label: "Télécharger son CV", action: () => redirect("cv") }
    ]);
  }, 1800);
}

// Redirections
function redirect(type) {
  chat.innerHTML = "";

  if (type === "linkedin") {
    botMessage("Pas de soucis je vous envoie vers son LinkedIn !");
    window.open("https://www.linkedin.com/in/david-esteban-31-toulouse/", "_blank");
  }

  if (type === "github") {
    botMessage("Redirection vers ses projets Git !");
    window.open("https://github.com/AceTBan", "_blank");
  }

  if (type === "mail") {
    botMessage("Vous pouvez dès à présent lui écrire un mail.");
    window.location.href = "mailto:esteban_david@ymail.com";
  }

  if (type === "cv") {
    botMessage("Téléchargement du CV en cours...");
    window.open("https://drive.google.com/file/d/1ivZ9LWlDYNaaTuh6DVKEI9nkwzju3__X/view?usp=sharing", "_blank");
  }
}

// Lancement
startAceBot();