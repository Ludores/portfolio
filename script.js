AOS.init();
emailjs.init("VLotxSJrdaTeXXa8f");

//////////////////////////////////////////////////////constants//////////////////////////////////////////////////////


const portfolio = [
  {
    title: "Mon portfolio ",
    type: "SiteWeb",
    technologies: ["HTML", "Css", "Javascript", "AOS"],
    description:
      "Ce portfolio a représenté un petit défi personnel que je me suis lancé : le concevoir et le développer uniquement avec HTML,CSS et Javascript sans recourir à aucun framework. C’était pour moi une manière de tester mes compétences de base et de prouver qu’avec des outils simples, on peut créer quelque chose de propre, fonctionnel et élégant.",
    link: "https://www.facebook.com",
    git: "https://www.facebook.com",
    image: "./assets/porfolio.png",
    imageBorder: true
  },
  {
    title: "STR360 ",
    type: "Desketop",
    technologies: ["VueJS", "Express", "Electron", "ExpressJs", "IndexedDB"],
    description:
      "<b>Développement fullStack: </b>Ce projet consiste en la conception d’une application desktop complète permettant de gérer plusieurs magasins de manière centralisée. Chaque magasin dispose de son propre espace pour enregistrer les entrées et sorties de produits, suivre les ventes quotidiennes, la gestion des stocks, et les mouvements de caisse. Les utilisateurs (vendeurs, gestionnaires) peuvent enregistrer en temps réel chaque opération effectuée (approvisionnement, vente, retour, perte, etc.). L’espace 'Boss' ou administration centrale permet quant à lui de visualiser et superviser l’ensemble des activités de tous les magasins. Grâce à un tableau de bord intuitif, le responsable peut",
    link: "https://www.facebook.com",
    git: "https://www.facebook.com",
    image: "./assets/gst.jpg",
  },
  {
    title: "CashPointer ",
    type: "Site Web",
    technologies: ["NextJS", "Scss", "Tailwind", "NestJs"],
    description:
      "<b>Développement backOffice: </b>Il s’agit d’un système complet de gestion de cashpoints, permettant de suivre en temps réel toutes les transactions financières effectuées dans plusieurs points de service (dépôts, retraits, transferts, paiements, approvisionnements, etc.). Chaque opération est enregistrée avec précision, incluant le montant, l’agent concerné, le solde avant/après, et la nature de la transaction. Grâce à un espace administrateur dédié, le responsable ou \"boss\" peut visualiser à distance l’ensemble des activités de tous les cashpoints, consulter les soldes disponibles, détecter d’éventuels déséquilibres de caisse, générer des rapports financiers et assurer un contrôle global sur les opérations quotidiennes, assurant ainsi une traçabilité, une sécurité et une vision centralisée de toute l’activité du réseau.",
    link: "https://www.facebook.com",
    git: "https://www.facebook.com",
    image: "./assets/back-office.png",
  },
  // {
  //   title: "Jeu de bulle ",
  //   type: "site Web",
  //   technologies: ["HTML", "Css", "Javascript"],
  //   description:
  //     "Projet personnel développé pour le plaisir, il s’agit d’un jeu de bulles éducatif visant à améliorer la dactylographie. L’utilisateur doit taper les lettres qui apparaissent dans les bulles avant qu’elles ne tombent. Réalisé entièrement en HTML, CSS et JavaScript pur, ce projet m’a permis de renforcer mes bases en développement web tout en explorant des mécaniques simples de jeu et d’interaction.",
  //   link: "https://www.facebook.com",
  //   git: "https://www.facebook.com",
  //   image: "./assets/gst.jpg",
  // },
  {
    title: "FS Manager ",
    type: "Desktop",
    technologies: ["ReactJS", "Scss", "Electon", "ExpressJs", "IndexedDB"],
    description:
      "<b>Développement FrontEnd: </b>Il s’agit d’une application desktop développée pour les responsables clientèle de <a href='https://www.facebook.com/fiharysoftformation'>FiharySoft</a>, destinée à assurer le suivi complet des étudiants tout au long de leur parcours. L’application permet de gérer l’ensemble du processus : depuis l’enregistrement initial de l’étudiant, son assignation à une formation, le suivi de sa progression, jusqu’à l’émission de son certificat en fin de cursus. Cette solution vise à optimiser la gestion administrative et à garantir une traçabilité claire et efficace du parcours de chaque apprenant.",
    link: "https://www.facebook.com",
    git: "https://www.facebook.com",
    image: "./assets/fs-manager.jpeg",
  }
];
const technologies = [
  {url: "./assets/react.svg", name: "ReactJs"},
  {url: "./assets/vue.svg", name: "VueJs"},
  {url: "./assets/next.svg", name: "NextJs"},
  {url: "./assets/nuxt.svg", name: "NuxtJs"},
  {url: "./assets/react.svg", name: "Native"},
  {url: "./assets/express.svg", name: "ExpressJs"},
  {url: "./assets/nest.svg", name: "NestJs"},
  {url: "./assets/mongo.svg", name: "MongoDB"},
  {url: "./assets/mysql.svg", name: "MySQL"},
  {url: "./assets/db.svg", name: "PostgreSQl"},
  {url: "./assets/git.svg", name: "Git"},
  {url: "./assets/electron.svg", name: "Electron"},
  {url: "./assets/indexeddb.svg", name: "IndexedDB"},
]

const show_nav_ul = () => {
  const nav_ul = document.querySelector("nav>ul");

  nav_ul.classList.toggle("show");
};

const scrollEvent = () => {
  const nav = document.querySelector("nav");
  if (scrollY > 80) {
    nav.classList.add("nav-scroll");
  } else {
    nav.classList.remove("nav-scroll");
  }
};

const showMoreDescription = () => {
  const descriptionSecondary = document.querySelectorAll(
    ".section-2>.description>.description-secondary"
  );
  const voirPlus = document.querySelector(".plus")

  descriptionSecondary.forEach((element, i) => {

    element.classList.toggle("show");
  });
};
const DomContentLoaded = () => {
  const loading = document.querySelector(".loading");
  loading.style.display = "none";

  setPortfolio();
  setTechnologies()
  AOS.refreshHard()

}

const setPortfolio = () => {
  const section7 = document.querySelector(".section-7");
  for (const _portfolio of portfolio) {
    const div1 = document.createElement("div");
    const div11 = document.createElement("div");
    const div111 = document.createElement("div");
    const div1111 = document.createElement("div");
    const div11111 = document.createElement("span");
    const div11112 = document.createElement("span");
    const div1112 = document.createElement("div");
    const div112 = document.createElement("div");
    const div113 = document.createElement("div");
    const div1131 = document.createElement("div");
    const div1132 = document.createElement("div");
    const div11322 = document.createElement("div");
    const div12 = document.createElement("div");
    const img = document.createElement("img")
    img.src = _portfolio.image

    div11111.innerHTML = _portfolio.title;
    div11112.innerHTML = _portfolio.type;
    div112.innerHTML = _portfolio.description;
    div1131.innerHTML = "Voir le projet";
    div11322.innerHTML = "gitHub";
    div11.setAttribute("data-aos", "fade-right")
    div12.setAttribute("data-aos", "fade-left")

    if(_portfolio.imageBorder)div12.style.border = "1px solid black"
    for (const techno of _portfolio.technologies) {
      const div = document.createElement("div");
      div.innerHTML = techno;
      div1112.appendChild(div);
    }
    
    // div1132.appendChild(svgGit)
    div1111.appendChild(div11111)
    div1111.appendChild(div11112)
    div1132.appendChild(div11322)
    div113.appendChild(div1131);
    div113.appendChild(div1132);
    div111.appendChild(div1111);
    div111.appendChild(div1112);
    div12.append(img)
    div11.appendChild(div111);
    div11.appendChild(div112);
    div11.appendChild(div113);
    div1.appendChild(div11);
    div1.appendChild(div12);
    section7.appendChild(div1);
  }
};

const setTechnologies = () => {

  const technoContainer = document.querySelector(".section-8>div:last-child")
  for(const techno of technologies){
    const divTechnoItem = document.createElement("div")

    const image = document.createElement("div")
    image.style.backgroundImage = `url(${techno.url})`  
    const divName = document.createElement("div")
    divName.innerHTML = techno.name

    divTechnoItem.appendChild(image)
    divTechnoItem.appendChild(divName)
    divTechnoItem.style.zIndex = 3

    technoContainer.appendChild(divTechnoItem)
  }
}

const enregistrer = () => {
  console.log("xxx")

  const params = {
    from_name: "Ludores",
    message: "Ceci est un message sans formulaire.",
    reply_to: "bejeryludores@gmail.com"
  };
  // emailjs.send("service_fo202e9", "template_tsitqmu", params, "VLotxSJrdaTeXXa8f")
  // .then(function(response) {
  //   alert("E-mail envoyé avec succès !");
  //   console.log("SUCCESS!", response.status, response.text);
  // }, function(error) {
  //   alert("Erreur lors de l'envoi.");
  //   console.log("FAILED...", error);
  // });
  emailjs.send("service_e00ayg6", "template_tsitqmu", {
        from_name: "bejery",
        reply_to: "larrysrakoto@gmail.com",
        message: "nous avons besoin de vous pour une sevice qu'on veut mettre en place"
      }).then(
        function(response) {
          alert("Message envoyé !");
        },
        function(error) {
          alert("Erreur : " + error.text); // Ici s'affichera "412" si tu as mal écrit un champ
        }
      );
}

//event Listener
document.addEventListener("scroll", scrollEvent);

document.addEventListener("DOMContentLoaded", DomContentLoaded);


