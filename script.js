AOS.init();


//////////////////////////////////////////////////////constants//////////////////////////////////////////////////////


const portfolio = [
  {
    title: "Mon portfolio",
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
    title: "Gestion de stock",
    type: "Desketop",
    technologies: ["VueJS", "Express", "Electron"],
    description:
      "Ce projet consiste en la conception d’une application web complète permettant de gérer plusieurs magasins de manière centralisée. Chaque magasin dispose de son propre espace pour enregistrer les entrées et sorties de produits, suivre les ventes quotidiennes, la gestion des stocks, et les mouvements de caisse. Les utilisateurs (vendeurs, gestionnaires) peuvent enregistrer en temps réel chaque opération effectuée (approvisionnement, vente, retour, perte, etc.). L’espace 'Boss' ou administration centrale permet quant à lui de visualiser et superviser l’ensemble des activités de tous les magasins. Grâce à un tableau de bord intuitif, le responsable peut",
    link: "https://www.facebook.com",
    git: "https://www.facebook.com",
    image: "./assets/gst.jpg",
  },
  {
    title: "CashPointer",
    type: "SiteWeb",
    technologies: ["NextJS", "Scss", "Tailwind"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sint laborum nesciunt nostrum, eos ducimus iste voluptatibus deleniti quasi. Ipsa est animi quaerat molestias? Nam, similique maxime! Fugit eius, cupiditate facere quos accusamus voluptatum quo harum id modi! Cumque maxime, dolores, quis omnis magnam nobis.",
    link: "https://www.facebook.com",
    git: "https://www.facebook.com",
    image: "./assets/gst.jpg",
  }
];

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

//event Listener
document.addEventListener("scroll", scrollEvent);

document.addEventListener("DOMContentLoaded", () => {
  const loading = document.querySelector(".loading");
  loading.style.display = "none";

  setPortfolio();
});
