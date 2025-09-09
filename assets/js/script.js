// NeoBrutalism Portfolio - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // --- Internationalization setup ---
    const translations = {
        fr: {
            nav_home: 'Accueil',
            nav_about: 'À propos',
            nav_projects: 'Projets Web',
            nav_games: 'Jeux Vidéo',
            nav_contact: 'Contact',
            cta_title: "Besoin d'un site web ?",
            cta_text: "Je crée des sites <span class=\"surligne-orange\">modernes, rapides et sur-mesure</span> pour développer votre activité.",
            cta_button: "Créons votre site !",
            about_title: 'À PROPOS',
            about_p1: 'Je <span class="surligne-orange">développe</span> mes compétences pratiques par la création de sites et l\'expérimentation de logiciels et moteurs de jeu.',
            about_p2: "Mis à part ça j'aime bien les <span class=\"surligne-orange\">échecs</span> (le jeu), les <span class=\"surligne-orange\">cookies</span> (les biscuits) et les <span class=\"surligne-orange\">Binturong</span> (l'animal)",
            about_p3: '<i><span class="surligne-orange">Passionnant...</span></i>',
            projects_title: 'PROJETS WEB',
            games_title: 'JEUX VIDÉO',
            contact_title: 'CONTACT',
            name_label: 'Nom & Prénom *',
            email_label: 'Email *',
            phone_label: 'Téléphone',
            company_label: 'Entreprise / Organisation',
            project_type_label: 'Type de projet *',
            select_placeholder: 'Sélectionnez',
            option_site_vitrine: 'Site vitrine',
            option_ecommerce: 'Site e-commerce',
            option_web_app: 'Application web',
            option_game: 'Jeu vidéo',
            option_refonte: 'Refonte de site existant',
            option_other: 'Autre',
            budget_label: 'Budget approximatif',
            budget_opt1: '200€ - 300€',
            budget_opt2: '300€ - 500€',
            budget_opt3: '500€ - 800€',
            budget_opt4: '800€+',
            delay_label: 'Délai souhaité',
            delay_opt1: 'Urgent (moins d’une semaine)',
            delay_opt2: '1-2 semaines',
            delay_opt3: '2-3 semaines',
            delay_opt4: '3-6 semaines',
            delay_opt5: 'Flexible',
            references_label: 'Sites de référence / Inspirations',
            references_placeholder: 'Ajoutez des liens ou des exemples...',
            description_label: 'Description détaillée du projet *',
            description_placeholder: 'Décrivez votre projet...',
            submit_button: 'Envoyer',
            footer_copy: '© 2025 Alexis Ventre - Tous droits réservés'
        },
        en: {
            nav_home: 'Home',
            nav_about: 'About',
            nav_projects: 'Web Projects',
            nav_games: 'Games',
            nav_contact: 'Contact',
            cta_title: 'Need a website?',
            cta_text: 'I build <span class="surligne-orange">modern, fast and custom</span> websites to grow your business.',
            cta_button: 'Let\'s build your site!',
            about_title: 'ABOUT',
            about_p1: 'I <span class="surligne-orange">develop</span> practical skills by creating websites and experimenting with software and game engines.',
            about_p2: "Apart from that I like <span class=\"surligne-orange\">chess</span> (the game), <span class=\"surligne-orange\">cookies</span> (the biscuits) and <span class=\"surligne-orange\">binturong</span> (the animal)",
            about_p3: '<i><span class="surligne-orange">Fascinating...</span></i>',
            projects_title: 'WEB PROJECTS',
            games_title: 'GAMES',
            contact_title: 'CONTACT',
            name_label: 'Name & Surname *',
            email_label: 'Email *',
            phone_label: 'Phone',
            company_label: 'Company / Organization',
            project_type_label: 'Project type *',
            select_placeholder: 'Select',
            option_site_vitrine: 'Showcase site',
            option_ecommerce: 'E-commerce site',
            option_web_app: 'Web application',
            option_game: 'Video game',
            option_refonte: 'Redesign existing site',
            option_other: 'Other',
            budget_label: 'Approx. budget',
            budget_opt1: '200€ - 300€',
            budget_opt2: '300€ - 500€',
            budget_opt3: '500€ - 800€',
            budget_opt4: '800€+',
            delay_label: 'Desired timeframe',
            delay_opt1: 'Urgent (less than a week)',
            delay_opt2: '1-2 weeks',
            delay_opt3: '2-3 weeks',
            delay_opt4: '3-6 weeks',
            delay_opt5: 'Flexible',
            references_label: 'Reference sites / Inspirations',
            references_placeholder: 'Add links or examples...',
            description_label: 'Detailed project description *',
            description_placeholder: 'Describe your project...',
            submit_button: 'Send',
            footer_copy: '© 2025 Alexis Ventre - All rights reserved'
        },
        es: {
            nav_home: 'Inicio',
            nav_about: 'Acerca de',
            nav_projects: 'Proyectos Web',
            nav_games: 'Juegos',
            nav_contact: 'Contacto',
            cta_title: '¿Necesitas un sitio web?',
            cta_text: 'Creo sitios <span class="surligne-orange">modernos, rápidos y a medida</span> para hacer crecer tu negocio.',
            cta_button: '¡Creemos tu sitio!',
            about_title: 'ACERCA DE',
            about_p1: 'Desarrollé mis habilidades prácticas creando sitios y experimentando con software y motores de juego.',
            about_p2: 'Aparte de eso me gustan el <span class="surligne-orange">ajedrez</span> (el juego), las <span class="surligne-orange">galletas</span> (los biscuits) y el <span class="surligne-orange">binturong</span> (el animal)',
            about_p3: '<i><span class="surligne-orange">Fascinante...</span></i>',
            projects_title: 'PROYECTOS WEB',
            games_title: 'JUEGOS',
            contact_title: 'CONTACTO',
            name_label: 'Nombre y Apellido *',
            email_label: 'Correo electrónico *',
            phone_label: 'Teléfono',
            company_label: 'Empresa / Organización',
            project_type_label: 'Tipo de proyecto *',
            select_placeholder: 'Selecciona',
            option_site_vitrine: 'Sitio informativo',
            option_ecommerce: 'Sitio e-commerce',
            option_web_app: 'Aplicación web',
            option_game: 'Videojuego',
            option_refonte: 'Rediseño de sitio existente',
            option_other: 'Otro',
            budget_label: 'Presupuesto aproximado',
            budget_opt1: '200€ - 300€',
            budget_opt2: '300€ - 500€',
            budget_opt3: '500€ - 800€',
            budget_opt4: '800€+',
            delay_label: 'Plazo deseado',
            delay_opt1: 'Urgente (menos de una semana)',
            delay_opt2: '1-2 semanas',
            delay_opt3: '2-3 semanas',
            delay_opt4: '3-6 semanas',
            delay_opt5: 'Flexible',
            references_label: 'Sitios de referencia / Inspiraciones',
            references_placeholder: 'Agrega enlaces o ejemplos...',
            description_label: 'Descripción detallada del proyecto *',
            description_placeholder: 'Describe tu proyecto...',
            submit_button: 'Enviar',
            footer_copy: '© 2025 Alexis Ventre - Todos los derechos reservados'
        }
    };

    const applyTranslations = (lang) => {
    // set html lang attribute for accessibility
    try { document.documentElement.lang = lang; } catch (e) {}
        // textContent replacements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) el.textContent = translations[lang][key];
        });

        // innerHTML replacements
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (translations[lang] && translations[lang][key]) el.innerHTML = translations[lang][key];
        });

        // title attributes for nav items
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            if (translations[lang] && translations[lang][key]) el.setAttribute('title', translations[lang][key]);
        });

        // placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) el.setAttribute('placeholder', translations[lang][key]);
        });

        // options and selects with data-i18n attributes
        document.querySelectorAll('option[data-i18n]').forEach(opt => {
            const key = opt.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) opt.textContent = translations[lang][key];
        });

        // update select elements that used data-i18n on options by attribute name
        document.querySelectorAll('option[data-i18n]').forEach(opt => {
            const key = opt.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) opt.textContent = translations[lang][key];
        });

        // update nav titles inside anchors if necessary
        // nothing else
    };

    // language auto-detection: use browser locale (first two chars), fallback to 'fr'
    const detected = (navigator.language || navigator.userLanguage || 'fr').slice(0,2).toLowerCase();
    const initial = ['fr','en','es'].includes(detected) ? detected : 'fr';
    applyTranslations(initial);
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.side-nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active navigation highlighting for side navbar
    const sections = document.querySelectorAll('section[id], header[id]');
    const sideNavLinks = document.querySelectorAll('.side-nav-link');

    function highlightNavigation() {
        let current = 'hero'; // Default to hero
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        sideNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    // Initial highlight
    highlightNavigation();
    window.addEventListener('scroll', highlightNavigation);

    // CTA Button interaction
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Scroll to contact section
            document.querySelector('#contact').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    }

    // Brutalist hover effects for cards
    const cards = document.querySelectorAll('.nb-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = this.style.transform.replace(/rotate\([^)]*\)/, '') + ' scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = this.style.transform.replace(/scale\([^)]*\)/, '');
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Add visual feedback
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Envoi en cours...';
            submitButton.disabled = true;
            
            // Reset after 3 seconds (you should replace this with actual form handling)
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 3000);
        });
    }

    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }

    // Intersection Observer for section animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        sectionObserver.observe(section);
    });

    // Random rotation for cards on load
    const rotateCards = () => {
        cards.forEach((card, index) => {
            const randomRotation = (Math.random() - 0.5) * 4;
            card.style.transform = `rotate(${randomRotation}deg)`;
        });
    };

    // Apply random rotations
    setTimeout(rotateCards, 1000);

    // Badge hover effects
    const badges = document.querySelectorAll('.badge');
    
    badges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });



    // Console easter egg
    console.log('%cCONSOLE - PORTFOLIO', 'color: #ff6600; font-size: 20px; font-weight: bold;');
    console.log('%c Coucou 👀 ', 'color: #0066ff; font-size: 14px;');

});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(() => {
    // Scroll-based animations can be placed here
}, 16)); // ~60fps

// Accessibility: Skip to content functionality
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab' && !document.querySelector('.skip-link')) {
        const skipLink = document.createElement('a');
        skipLink.href = '#about';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Aller au contenu principal';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: #ff6600;
            color: white;
            padding: 8px;
            text-decoration: none;
            border: 2px solid #000;
            z-index: 1000;
            font-weight: bold;
        `;
        
        skipLink.addEventListener('focus', function() {
            this.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', function() {
            this.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    }
});
