// Sélection du menu de navigation
const navbar = document.querySelector('.nav-menu');

// Position du menu de navigation par rapport au haut de la page
const navbarOffsetTop = navbar.offsetTop;

// Hauteur du menu de navigation
const navbarHeight = navbar.offsetHeight;

// Sélection du corps de la page (balise <main>)
const mainContent = document.querySelector('main');

// Fonction pour fixer ou libérer le menu en fonction du défilement
function handleScroll() {
    if (window.pageYOffset >= navbarOffsetTop && window.innerWidth > 768) {
        navbar.classList.add('fixed');
        mainContent.style.paddingTop = `${navbarHeight}px`; // Ajouter un espace de remplacement
    } else {
        navbar.classList.remove('fixed');
        mainContent.style.paddingTop = '0'; // Retirer l'espace de remplacement
    }
}

// Écoute de l'événement de défilement
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
window.addEventListener('resize', handleScroll);

// Script pour masquer le lien "Voir tous les contenus" en bas en mode desktop
function toggleSeeAllLink() {
    const mobileLink = document.querySelector('.see-all-content.mobile');
    if (window.innerWidth <= 768) {
        mobileLink.style.display = 'block';
    } else {
        mobileLink.style.display = 'none';
    }
}

// Appeler la fonction au chargement et lors du redimensionnement
window.addEventListener('load', toggleSeeAllLink);
window.addEventListener('resize', toggleSeeAllLink);

// Script pour le menu responsive
        document.querySelector('.menu-toggle').addEventListener('click', function() {
            document.querySelector('.nav-menu').classList.toggle('active');
        });