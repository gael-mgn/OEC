//const root = 'https://sciensationnel.github.io/Sciensationnel/'

document.addEventListener("DOMContentLoaded", function () {
    const a_la_une_container = document.getElementById('a_la_une_articles');
    const actions_container = document.getElementById('actions_articles');
    const recherches_et_analyses_container = document.getElementById('recherches_et_analyses');
    const critiques_container = document.getElementById('critiques_articles');

    let actions = 0;
    let recherches = 0;
    let critiques = 0;

    for (var i = 0; i < articles.length; i++) {
        const author = articles[i];
        if (i < 3){
            a_la_une_container.innerHTML += addArticle(author, "featured-article");
        }
        else if (author.categories.includes("action") && actions < 2) {
            actions+=1;
            actions_container.innerHTML += addArticle(author, "article-horizontal");
        }
        else if (author.categories.includes("recherche_analyse") && recherches < 2) {
            recherches+=1;
            recherches_et_analyses_container.innerHTML += addArticle(author, "article-horizontal");
        }
        else if (author.categories.includes("critique") && critiques < 2) {
            critiques+=1;
            critiques_container.innerHTML += addArticle(author, "article-horizontal");
        }
    }
});