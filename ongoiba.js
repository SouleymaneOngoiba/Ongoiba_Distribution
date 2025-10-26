document.addEventListener('DOMContentLoaded', () => {
    // 1. Gestion de la navigation mobile (Menu Burger)
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.getElementById('main-nav');

    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // 2. Ajout d'une classe pour le style de l'en-tête au défilement (Scroll)
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    // (Pensez à ajouter le CSS pour .scrolled, ex: background-color: white; border-bottom: 1px solid var(--primary-color);)

    // 3. Injection de Contenu Dynamique (Simuler une API)
    const products = [
        { id: 1, name: "Matériel Logistique Pro", description: "Équipement de pointe pour l'entreposage.", price: "Sur Devis", icon: "fas fa-pallet" },
        { id: 2, name: "Services de Fret Aérien", description: "Livraison rapide et sécurisée à l'international.", price: "Contrat", icon: "fas fa-plane" },
        { id: 3, name: "Solutions de Traçabilité", description: "Suivi en temps réel de vos marchandises.", price: "Mensuel", icon: "fas fa-map-marker-alt" },
    ];

    const productList = document.getElementById('product-list');
    if (productList) {
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <i class="${product.icon}"></i>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="product-price">${product.price}</p>
                <a href="#" class="btn-primary btn-small">En savoir plus</a>
            `;
            productList.appendChild(productCard);
        });
    }

    // 4. Gestion du Formulaire de Contact (Simple validation front-end)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Empêcher l'envoi par défaut
            
            // Logique de validation et d'envoi du formulaire (simulée)
            alert('Message envoyé avec succès! ONGOIBA DISTRIBUTION vous recontactera bientôt.');
            contactForm.reset();
            
            // NOTE: Pour un site réel, il faut envoyer les données à un serveur (PHP, Node.js, etc.)
        });
    }

    // 5. Carrousel/Slider (Doit utiliser une librairie comme Swiper.js ou codé de zéro - ici, juste une base)
    // Pour une solution complète, intégrez une librairie de carrousel pour #testimonial-slider.
});