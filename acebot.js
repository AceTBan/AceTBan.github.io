const chat = document.getElementById("acebot-chat");
const options = document.getElementById("acebot-options");
const typing = document.getElementById("acebot-typing");

function botMessage(text) {
  typing.style.display = "block";
  setTimeout(() => {
    typing.style.display = "none";
    const msg = document.createElement("div");
    msg.className = "bot-msg";
    msg.textContent = text;
    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;
  }, 600);
}

function showOptions(buttons) {
  options.innerHTML = "";
  buttons.forEach(btn => {
    const b = document.createElement("button");
    b.textContent = btn.label;
    b.onclick = btn.action;
    options.appendChild(b);
  });
}

function startAceBot() {
  botMessage("Salut ! Je suis AceBot 🤖");
  setTimeout(() => botMessage("Comment puis‑je t’aider aujourd’hui ?"), 700);

  setTimeout(() => {
    showOptions([
      { label: "Un peu plus d'infos me concernat", action: () => redirect("linkedin") },
      { label: "Voir mes projets", action: () => redirect("github") },
      { label: "Me contacter", action: () => redirect("mail") },
      { label: "Télécharger mon CV", action: () => redirect("cv") }
    ]);
  }, 1200);
}

function redirect(type) {
  chat.innerHTML = "";
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
    window.open("https://drive.google.com/file/d/15E4ZP_o8ODKchWPxzQe5JEHho598NiW1/view?usp=drive_link", "_blank");
  }
}

startAceBot();