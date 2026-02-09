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
      { label: "Le contacter directement.", action: () => redirect("mail") },
//      { label: "En savoir plus sur son parcours. ", action: () => redirect("linkedin") },
//      { label: "Voir d'anvantage ses projets.", action: () => redirect("github") },
//      { label: "Voir son CV.", action: () => redirect("cv") },
      { label: "Objectif professionnel.", action: () => redirect("objectif") },
//     { label: "Compétences techniques", action: () => redirect("skills") },
      { label: "Zone Géogrphique", action: () => redirect("zone_geo") },
      { label: "Quel âge a-t-il ?", action: () => redirect("age") },


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

      { label: "Horizon professionnel", action: () => redirect("horizon") },

      // Retour au menu principal
      { label: "Accueil", action: () => startAceBot() }
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
      { label: "Voir d'anvantage ses projets.", action: () => redirect("github") },

      // Redirection vers le CV
      { label: "Voir son CV.", action: () => redirect("cv") },

      // Retour au menu principal
      { label: "Accueil", action: () => startAceBot() }
    ]);
  }, 1200); // on laisse un petit délai pour que les messages aient le temps d’apparaître
}

if (type === "age") {
  botMessage("31 ans.");

  setTimeout(() => {
    botMessage(`
    Mais pas de panique puisqu'il bénéficie d’une RQTH (Reconnaissance de la Qualité de Travailleur Handicapé),

Son âge n’est donc pas un frein à l’alternance, bien au contraire . 
    `);
  }, 1000);

  setTimeout(() => {
    showOptions([
      { label: "En savoir plus sur la RQTH", action: () => redirect("rqth") },
      { label: "Objectif professionnel.", action: () => redirect("objectif") },
      { label: "Posture professionnel", action: () => redirect("posture_professionnel") },
      { label: "Accueil", action: () => startAceBot() }
    ]);
  }, 2000);
}

if (type === "rqth") {
  botMessage("La RQTH est une reconnaissance officielle qui permet d'accéder à certains dispositifs .");

  setTimeout(() => {
    botMessage(`
Dans son cas, elle n’implique aucun aménagement spécifique.   
Elle permet simplement de bénéficier d’un accompagnement, et peut représenter un certain avantage pour l’entreprise (aides, primes, accompagnement RH, etc.).

    `);
  }, 4000);

  setTimeout(() => {
    showOptions([
      { label: "Posture professionnel", action: () => redirect("posture_professionnel") },
      { label: "Voir ses compétences", action: () => redirect("skills") },
      { label: "Télécharger son CV", action: () => redirect("cv") },
      { label: "Accueil", action: () => startAceBot() }
    ]);
  }, 1500);
}

if (type === "posture_professionnel") {
  botMessage("Voici une synthèse de son profil professionnel :");

  setTimeout(() => {
    botMessage(`
    Un profil créatif et rigoureux, capable d’apprendre vite et de s’adapter facilement.  
    Son fonctionnement repose sur l’analyse, la conception et l’amélioration continue.  
    Il est autonome, respectueux, ouvert d’esprit et orienté vers l’action.
    `);
  }, 2500);

  setTimeout(() => {
    showOptions([
      { label: "Source", action: () => redirect("source") },
  //    { label: " ", action: () => redirect(" ") },
  //    { label: " ", action: () => redirect(" ") },
  //    { label: " ", action: () => redirect(" ") },
  //    { label: " ", action: () => redirect(" ") },
  //    { label: " ", action: () => redirect(" ") },
      { label: "Accueil", action: () => startAceBot() }
    ]);
  }, 1000);
}

if (type === "source") {
  botMessage(`
  Selon une étude réalisée par AssessFirst plateforme française d’évaluation prédictive utilisée pour le recrutement et la gestion des talents .
  `);

  setTimeout(() => {
    showOptions([
  //    { label: " ", action: () => redirect(" ") },
  //    { label: " ", action: () => redirect(" ") },
  //    { label: " ", action: () => redirect(" ") },
      { label: "Accueil", action: () => startAceBot() }
    ]);
  }, 800);
}

if (type === "zone_geo") {
  botMessage(`


Basé entre Toulouse et Tarbes, cela permet d’être mobile sur une zone très large dans le Sud‑Ouest.

Véhiculé, ce qui facilite les déplacements réguliers ou ponctuels.
`);

setTimeout(() => {
  botMessage(`
  Peux donc intervenir facilement sur :
  • Toulouse et toute sa métropole  
  • Blagnac, Colomiers, Tournefeuille  
  • Muret, Portet, Labège, Ramonville  
  • Tarbes, Lourdes, Lannemezan 
  • Gers 
  • Et plus largement toute l’Occitanie et le Sud‑Ouest selon les besoins.
  `);
}, 6000);

  setTimeout(() => {
    showOptions([
      { label: "Télétravail", action: () => redirect("télétravail") },
      { label: "Objectif professionnel", action: () => redirect("objectif") },
      { label: "Profil professionnel", action: () => redirect("profil") },
      { label: "Accueil", action: () => startAceBot() }
    ]);
  }, 800);
}

if (type === "télétravail") {
  botMessage(`
  Ouvert au télétravail partiel ou total, au mode hybride ou aux déplacements selon l’organisation et les besoin de l’entreprise.
  `);

  setTimeout(() => {
    showOptions([
  //    { label: " ", action: () => redirect(" ") },
  //    { label: " ", action: () => redirect(" ") },
  //    { label: " ", action: () => redirect(" ") },
      { label: "Accueil", action: () => startAceBot() }
    ]);
  }, 800);
}


 if (type === "horizon") {
  botMessage(`Court terme
  Obtenir le titre de Concepteur Développeur d’Applications (CDA)
  — Consolider les bases techniques, monter en compétences, commencer à construire un portfolio solide.
 `);

  setTimeout(() => {
    botMessage(` 
     Moyen terme 
    Évoluer vers du développement narratif
    — Se spécialiser dans l’écriture interactive, le game design narratif, les outils narratifs (Ink, Yarn Spinner…), et travailler sur des projets qui mêlent code et storytelling.
   
    `);
  }, 6000); 
 
  setTimeout(() => {
    botMessage(` 
    Long terme 
   Travailler à l’étranger
   — Intégrer un studio international, découvrir d’autres cultures professionnelles, élargir son réseau et ses opportunités.
   `);
  }, 12000);

  setTimeout(() => {
    showOptions([
//      { label: " ", action: () => redirect(" ") },
//      { label: " ", action: () => redirect(" ") },
				 { label: "Centre d'intérêts", action: () => redirect("hobby") },
   	 	   { label: "Retour", action: () => startAceBot() }
    ]);
  }, 800);
}

if (type === "hobby") {
  botMessage(`Un ensemble de centres d’intérêt mêlant game design, technologies 3D et musicale — trois domaines où l’autodidactie me permet d’explorer constamment de nouvelles idées.

   `);

  setTimeout(() => {
    showOptions([
   //   { label: " ", action: () => redirect(" ") },
   //   { label: " ", action: () => redirect(" ") },
   //   { label: " ", action: () => redirect(" ") },
      { label: "Retour", action: () => startAceBot() }
    ]);
  }, 800);
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