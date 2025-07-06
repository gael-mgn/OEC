const articles = [
    {
        img: "NULL",
        link: "articles/la santé mentale comme outil néolibéral et capitaliste/la santé mentale comme outil néolibéral et capitaliste.html",
        title: "La santé mentale comme outil néolibéral et capitaliste",
        description: "Dans quelle mesure la santé mentale représente un instrument en faveur de la société libérale mondialisée ? Si la dimension psychique de la vie sociale apparaît désormais comme un enjeu d’ordre collectif et qui dépasse le seul caractère psychiatrique, il convient d’en observer l’appropriation et son instrumentalisation dans le cadre du système capitaliste plus global.",
        date: "6 juillet 2025 | Eunice Djunga",
        categories: ["critique"],
    },
    {
        img: "NULL",
        link: "articles/la médecine, une science neutre/la médecine, une science neutre.html",
        title: "La Médecine, une Science neutre ?",
        description: "Les sciences médicales n’ont que très récemment commencé à considérer l’importance du genre. En effet, la médecine moderne s’est longtemps basée sur le corps masculin comme norme : les essais cliniques, les protocoles et les diagnostics ont souvent exclu les femmes. De ce fait, la production des connaissances scientifiques, de même que leur application clinique, ont conduit à des inégalités entre les hommes et les femmes.",
        date: "6 juin 2025 | Eunice Djunga",
        categories: ["critique"],
    },
    {
        img: "articles/intersectionnalité penser les oppressions de manière critique/image1.png",
        link: "articles/intersectionnalité penser les oppressions de manière critique/intersectionnalité penser les oppressions de manière critique.html",
        title: "Intersectionnalité : penser les oppressions de manière critique",
        description: "L’intersectionnalité, qui se définit comme la « prise en compte du cumul de plusieurs facteurs d’inégalité ou de discrimination, généralement l’assignation à une origine raciale ou ethnique supposée, l’identité sexuelle et le milieu social », est un concept clé du féminisme contemporain.",
        date: "2 mai 2025 | Astrid Lavit d'Hautefort",
        categories: ["critique"],
        alt: "illustration de l'article"
    },
    {
        img: "articles/arts et féminisme focus sur les guerilla girls/image1.png",
        link: "articles/arts et féminisme focus sur les guerilla girls/arts et féminisme focus sur les guerilla girls.html",
        title: "Arts et féminisme : focus sur les Guerilla Girls",
        description: "Les Guerilla Girls sont un groupe d’artistes féministes fondé à New York en 1985. Elles sont connues pour leur création et diffusion d’affiches afin de combattre le sexisme et le racisme dans les arts. Leurs masques de gorilles, signatures du groupe, leur permettent de garder l’anonymat.",
        date: "25 avril 2025 | Astrid Lavit d'Hautefort",
        categories: ["critique"],
        alt: "illustration de l'article"
    },
    {
        img: "NULL",
        link: "articles/la critique féministe/la critique féministe.html",
        title: "La critique féministe, quesaco ?",
        description: "Cette rubrique se veut un espace dédié aux pensées du courant féministe. En son sein, nous explorerons le lien historique entre féminisme et exercice de l’esprit critique, ainsi que la diversité des courants internes au féminisme.",
        date: "15 avril 2025 | Astrid Lavit d'Hautefort",
        categories: ["critique"],
        alt: "illustration de l'article"
    },
    /*
    {
        img: "NULL",
        link: "articles/le rôle des médias dans la promotion des problèmes publics/le rôle des médias dans la promotion des problèmes publics.html",
        title: "Le rôle des médias dans la promotion des problèmes publics",
        description: "Nous nous intéresserons au rôle central que jouent les médias dans la mise en lumière des problèmes publics, influençant l'opinion et les décisions politiques en orientant l’attention sur des enjeux spécifiques.",
        date: "28 novembre 2024",
        categories: ["recherche_analyse"],
        alt: "illustration de l'article"
    },*/
    {
        img: "articles/comprendre la chaîne de propagation d'une fake news/1.jpeg",
        link: "articles/comprendre la chaîne de propagation d'une fake news/comprendre la chaîne de propagation d'une fake news.html",
        title: "Comprendre la chaîne de propagation d'une fake news",
        description: "Les fausses informations, communément appelées « fake news », prolifèrent à une vitesse impressionnante grâce aux réseaux sociaux et leur capacité à toucher des millions de personnes enseulement quelques clics. Pour comprendre comment une fake news se propage et devient virale, il est essentiel de retracer son parcours, de sa création à sa diffusion massive.",
        date: "12 novembre 2024",
        categories: ["recherche_analyse"],
        alt: "illustration de l'article"
    },
    {
        img: "articles/une veille pour lutter contre la désinformation/1.jpeg",
        link: "articles/une veille pour lutter contre la désinformation/une veille pour lutter contre la désinformation.html",
        title: "Démystifier l’Info : Une veille pour lutter contre la désinformation",
        description: "Explorez notre veille d’information dédiée à la lutte contre la désinformation : un espace où journalistes, chercheurs, et experts analysent les fausses informations et les dernières tendances en matière de fact-checking. Suivez les acteurs en première ligne pour une meilleure compréhension de l’actualité et des outils de vérification.",
        date: "6 novembre 2024",
        categories: ["recherche_analyse", "action"],
        alt: "illustration de l'article"
    },
    {
        img: "NULL",
        link: "articles/comprendre%20et%20reconnaître%20les%20pièges%20de%20la%20pensée/comprendre%20et%20reconnaître%20les%20pièges%20de%20la%20pensée.html",
        title: "Les Biais Cognitifs : Comprendre et Reconnaître les Pièges de la Pensée",
        description: "Les biais cognitifs sont des raccourcis mentaux qui influencent notre jugement de manière inconsciente. Ils sont souvent nécessaires pour traiter l'information rapidement, mais peuvent aussi nous conduire à des erreurs de raisonnement et à des conclusions fausses.",
        date: "28 octobre 2024",
        categories: ["recherche_analyse"],
    },
     {
        img: "articles/guide pratique pour détecter les images générées par l'IA/img.jpg",
        link: "articles/guide pratique pour détecter les images générées par l'IA/guide pratique pour détecter les images générées par l'IA.html",
        title: "Guide Pratique pour Détecter les Images Générées par l'IA",
        description: "Ce guide pratique vous aide à repérer facilement les images générées par l'IA, en analysant les détails visuels, contextuels et techniques pour lutter contre la désinformation.",
        date: "29 novembre 2024",
        categories: ["action"],
    },
    {
        img: "NULL",
        link: "articles/critique/critique.html",
        title: "La Critique",
        description: "Le volet Critique Culturelle de l’OEC offre un espace dédié à l’analyse et à l’expression personnelle autour des productions culturelles contemporaines et classiques. En abordant des œuvres littéraires, cinématographiques, théâtrales, artistiques, et autres.",
        date: "27 octobre 2024",
        categories: ["critique"],
    },
    {
        img: "articles/recherche/img.jpg",
        link: "articles/recherche/recherche.html",
        title: "La Recherche",
        description: "Produire des analyses, études, et articles en lien avec l’esprit critique, la désinformation, et l’impact des technologies numériques sur la perception de l’information.",
        date: "26 octobre 2024",
        categories: ["recherche_analyse"],
    },
    {
        img: "NULL",
        link: "articles/publication/publication.html",
        title: "La Publication",
        description: "La publication est au cœur de notre mission de diffusion et de sensibilisation. Par des articles, des infographies, et des études accessibles, nous rendons compte des résultats de nos recherches et transmettons nos ceux-ci au plus grand nombre.",
        date: "26 octobre 2024",
        categories: ["recherche_analyse"],
    },
    {
        img: "NULL",
        link: "articles/sensibilisation/sensibilisation.html",
        title: "La Sensibilisation",
        description: "Apprendre à analyser les informations, les images, et les discours pour mieux comprendre les mécanismes médiatiques.",
        date: "25 octobre 2024",
        categories: ["action"],
        alt: "illustration de l'article"
    }
];



function addArticle(article, type, additionalPath = ""){

let img = "";
        if (article.img != "NULL"){
            img += `<img src="${additionalPath + article.img}" alt="${article.alt}">`;
        }

    return `
    <a href="${additionalPath + article.link}" class="${type}">
         ${img}
        <div class="article-info">
            <h3>${article.title}</h3>
                <p class="article-description">${article.description}</p>
                <p class="publication-date">Publié le ${article.date}</p>
                <span class="arrow-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
        </div>
    </a>

    `;
}

function fillSection(category, id, n=-1, additionalPath = "") {
    const container = document.getElementById(id);
    let i2 = 0;
    for (var i = 0; i < articles.length; i++) {
        const article = articles[i];
        if ((article.categories.includes(category) || category == "") && (n==-1 || i2 < n)) {
            i2+=1
            container.innerHTML += addArticle(article, "article-horizontal", additionalPath);
        }
    }
}

function fillColumn(category, id, n=-1, additionalPath = "") {
    const container1 = document.getElementById(id + "1");
    const container2 = document.getElementById(id + "2");
    let i2 = 0;
    for (var i = 0; i < articles.length; i++) {
        const article = articles[i];
        if ((article.categories.includes(category) || category == "") && (n==-1 || i2 < n)) {
            if (i2%2 == 0){
                 container1.innerHTML += addArticle(article, "featured-article", additionalPath);
            }
            else {
                container2.innerHTML += addArticle(article, "article-horizontal", additionalPath);
            }
            i2+=1;
        }
    }
}