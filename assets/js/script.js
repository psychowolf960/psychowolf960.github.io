// NeoBrutalism Portfolio - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // --- Internationalization setup ---
    const translations = {
        fr: {
            nav_home: 'Accueil',
            nav_about: '\u00C0 propos',
            nav_projects: 'Projets Web',
            nav_games: 'Jeux Vid\u00E9o',
            cta_title: "Besoin d'un site web ?",
            cta_text: 'Je cr\u00E9e des sites <span class="surligne-orange">modernes, rapides et sur-mesure</span> pour d\u00E9velopper votre activit\u00E9.',
            about_title: '\u00C0 PROPOS',
            about_p1: 'Je <span class="surligne-orange">d\u00E9veloppe</span> mes comp\u00E9tences pratiques par la cr\u00E9ation de sites et l\'exp\u00E9rimentation de logiciels et moteurs de jeu.',
            about_p2: "Mis \u00E0 part \u00E7a j'aime bien les <span class=\"surligne-orange\">\u00E9checs</span> (le jeu), les <span class=\"surligne-orange\">cookies</span> (les biscuits) et les <span class=\"surligne-orange\">Binturong</span> (l'animal)",
            about_p3: '<i><span class="surligne-orange">Passionnant...</span></i>',
            projects_title: 'PROJETS WEB',
            games_title: 'JEUX VID\u00C9O',
            footer_copy: '\u00A9 {year} Alexis Ventre - Tous droits r\u00E9serv\u00E9s'
        },
        en: {
            nav_home: 'Home',
            nav_about: 'About',
            nav_projects: 'Web Projects',
            nav_games: 'Games',
            cta_title: 'Need a website?',
            cta_text: 'I build <span class="surligne-orange">modern, fast and custom</span> websites to grow your business.',
            about_title: 'ABOUT',
            about_p1: 'I <span class="surligne-orange">develop</span> practical skills by creating websites and experimenting with software and game engines.',
            about_p2: "Apart from that I like <span class=\"surligne-orange\">chess</span> (the game), <span class=\"surligne-orange\">cookies</span> (the biscuits) and <span class=\"surligne-orange\">binturong</span> (the animal)",
            about_p3: '<i><span class="surligne-orange">Fascinating...</span></i>',
            projects_title: 'WEB PROJECTS',
            games_title: 'GAMES',
            footer_copy: '\u00A9 {year} Alexis Ventre - All rights reserved'
        },
        es: {
            nav_home: 'Inicio',
            nav_about: 'Acerca de',
            nav_projects: 'Proyectos Web',
            nav_games: 'Juegos',
            cta_title: '\u00BFNecesitas un sitio web?',
            cta_text: 'Creo sitios <span class="surligne-orange">modernos, r\u00E1pidos y a medida</span> para hacer crecer tu negocio.',
            about_title: 'ACERCA DE',
            about_p1: 'Desarroll\u00E9 mis habilidades pr\u00E1cticas creando sitios y experimentando con software y motores de juego.',
            about_p2: 'Aparte de eso me gustan el <span class="surligne-orange">ajedrez</span> (el juego), las <span class="surligne-orange">galletas</span> (los biscuits) y el <span class="surligne-orange">binturong</span> (el animal)',
            about_p3: '<i><span class="surligne-orange">Fascinante...</span></i>',
            projects_title: 'PROYECTOS WEB',
            games_title: 'JUEGOS',
            footer_copy: '\u00A9 {year} Alexis Ventre - Todos los derechos reservados'
        }
    };

    const applyTranslations = (lang) => {
        try { document.documentElement.lang = lang; } catch (e) {}

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                let text = translations[lang][key];
                if (text.includes('{year}')) text = text.replace('{year}', new Date().getFullYear());
                el.textContent = text;
            }
        });

        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (translations[lang] && translations[lang][key]) el.innerHTML = translations[lang][key];
        });

        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            if (translations[lang] && translations[lang][key]) el.setAttribute('title', translations[lang][key]);
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) el.setAttribute('placeholder', translations[lang][key]);
        });

        document.querySelectorAll('option[data-i18n]').forEach(opt => {
            const key = opt.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) opt.textContent = translations[lang][key];
        });
    };

    // Language auto-detection
    const detected = (navigator.language || navigator.userLanguage || 'fr').slice(0, 2).toLowerCase();
    const initial = ['fr', 'en', 'es'].includes(detected) ? detected : 'fr';
    applyTranslations(initial);

    // Dynamic copyright year
    const footerCopy = document.querySelector('.footer-copy');
    if (footerCopy) {
        let text = translations[initial].footer_copy;
        footerCopy.textContent = text.replace('{year}', new Date().getFullYear());
    }

    // --- Burger menu ---
    const burger = document.getElementById('burger-menu');
    const navLinksContainer = document.getElementById('side-nav-links');
    if (burger && navLinksContainer) {
        burger.addEventListener('click', () => {
            navLinksContainer.classList.toggle('open');
        });
        burger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                navLinksContainer.classList.toggle('open');
            }
        });
    }

    // --- Navigation ---
    const navLinks = document.querySelectorAll('.side-nav-link[href^="#"]');
    const sections = document.querySelectorAll('section[id], header[id]');
    const sideNavLinks = document.querySelectorAll('.side-nav-link');

    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            if (window.innerWidth <= 768) navLinksContainer.classList.remove('open');
        });
    });

    // Active nav highlighting (debounced)
    function highlightNavigation() {
        let current = 'hero';
        sections.forEach(section => {
            if (window.pageYOffset >= section.offsetTop - 200) {
                current = section.getAttribute('id');
            }
        });
        sideNavLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    }

    highlightNavigation();
    window.addEventListener('scroll', debounce(highlightNavigation, 16));

    // --- Hero typewriter effect ---
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
        setTimeout(typeWriter, 500);
    }

    // --- Section fade-in animations ---
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        sectionObserver.observe(section);
    });

    // --- Badge hover effects ---
    document.querySelectorAll('.badge').forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        badge.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // --- Rough Notation doodles ---
    const initRoughNotation = () => {
        if (typeof RoughNotation === 'undefined') return;

        const rnHeroTitle = document.querySelector('.hero-title');
        const ctaTitleEl = document.querySelector('.cta-title');
        const ctaHighlight = document.querySelector('.cta-text .surligne-orange');

        // Box around hero title (after typewriter finishes: 500ms delay + ~14*100ms + 500ms buffer)
        if (rnHeroTitle) {
            setTimeout(() => {
                const a1 = RoughNotation.annotate(rnHeroTitle, {
                    type: 'box',
                    color: '#ff6b6b',
                    strokeWidth: 3,
                    padding: 8,
                    animationDuration: 800
                });
                a1.show();
            }, 2500);
        }

        // Underline on CTA title
        if (ctaTitleEl) {
            const a2 = RoughNotation.annotate(ctaTitleEl, {
                type: 'underline',
                color: '#ff6b6b',
                strokeWidth: 3,
                animationDuration: 600
            });
            setTimeout(() => a2.show(), 3400);
        }

        // Highlight on CTA keywords
        if (ctaHighlight) {
            const a3 = RoughNotation.annotate(ctaHighlight, {
                type: 'highlight',
                color: '#ffe66daa',
                animationDuration: 800,
                multiline: true
            });
            setTimeout(() => a3.show(), 4100);
        }
    };
    initRoughNotation();

    // --- 3D Tilt effect on game cards ---
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('tilt-active');
        });

        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            this.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        });

        card.addEventListener('mouseleave', function() {
            this.classList.remove('tilt-active');
            this.style.transform = '';
        });
    });

    // --- Game Detail Modal ---
    const gameData = {
        guscurse: {
            title: 'GusCurse',
            genre: 'Aventure / Puzzle',
            desc: "Jeu d'aventure et de puzzle m\u00EAlant 3D et 2D, cr\u00E9\u00E9 pour la Baudot Autumn Game Jam. Premier prix du jury.",
            link: 'https://psychowolf960.itch.io/guscurse',
            video: 'https://www.youtube.com/watch?v=OyrPyMJgYgE'
        },
        better: {
            title: 'Better',
            genre: 'Platformer / Speedrun',
            desc: "Jeu de platforming 2D de pr\u00E9cision et speedrunning multijoueur minimaliste avec \u00E9diteur de niveaux, partage communautaire et classements.",
            link: 'https://psychowolf960.itch.io/bebetter'
        },
        fpills: {
            title: 'FPills',
            genre: 'FPS / Aventure',
            desc: "Jeu de tir \u00E0 la premi\u00E8re personne o\u00F9 le joueur doit balancer une jauge d'addiction en r\u00E9cup\u00E9rant des drops sur ses ennemis.",
            link: 'https://psychowolf960.itch.io'
        },
        knight: {
            title: 'The Legendary Knight',
            genre: 'Platformer / Narratif',
            desc: "Platformer narratif r\u00E9alis\u00E9 en 7 jours pour la cat\u00E9gorie #beginner de la Pixel Game Jam 2024.",
            link: 'https://psychowolf960.itch.io/the-legendary-knight'
        },
        oneway: {
            title: 'Oneway',
            genre: 'Runner 2D',
            desc: "Runner 2D inspir\u00E9 de Chrome Dino o\u00F9 le Petit Chaperon Rouge r\u00E9colte des pi\u00E8ces pour survivre dans un monde capitaliste injuste. Deuxi\u00E8me prix laur\u00E9at Acad\u00E9mie de Reims \u2014 Troph\u00E9es NSI.",
            link: 'https://psychowolf960.itch.io/oneway'
        },
        painter: {
            title: 'PAINTer',
            genre: 'Simulation / Art',
            desc: "Simulateur d'artiste ind\u00E9pendant inspir\u00E9 de Passpartout. Acceptez des commandes en ligne, g\u00E9rez votre r\u00E9putation, achetez des outils et payez vos imp\u00F4ts pour survivre. Prototype en cours de d\u00E9veloppement.",
            link: 'https://psychowolf960.itch.io/painter-hungry-artists'
        },
        puff: {
            title: 'Puff',
            genre: 'Simulateur 2D',
            desc: "Simulateur 2D o\u00F9 le but est d'aller le plus loin possible avec un ballon sans se d\u00E9gonfler, puis d'acheter des am\u00E9liorations entre chaque mort.",
            link: 'https://psychowolf960.itch.io/puff'
        },
        unispin: {
            title: 'Unispin',
            genre: 'Simulation',
            desc: "Simulateur de syst\u00E8mes solaires. Cr\u00E9ez et observez vos propres configurations plan\u00E9taires.",
            link: 'https://psychowolf960.itch.io/unispin'
        },
        yargh: {
            title: 'YARGH',
            genre: 'Horreur / \u00C9nigme',
            desc: "Jeu d'horreur et d'\u00E9nigmes r\u00E9alis\u00E9 pour la Game Jam The Witching Hour.",
            link: 'https://psychowolf960.itch.io/yargh'
        },
        dawnfire: {
            title: 'DawnFire',
            genre: 'Horreur / Narratif',
            desc: "Mini jeu d'horreur narratif r\u00E9alis\u00E9 pour la Wild Jam 70.",
            link: 'https://lauiss.itch.io/dawnfire'
        },
        aregner: {
            title: 'Ar\u00E9gner',
            genre: 'Humour / Strat\u00E9gie',
            desc: "Une troupe d'araign\u00E9es tente de faire peur aux habitants pour s'accaparer leurs logements en poss\u00E9dant les objets du logis. R\u00E9alis\u00E9 pour la Spooky Jam 2.",
            link: 'https://razael170.itch.io/argner'
        },
        ballgame: {
            title: 'A Ball Game',
            genre: 'Humour / Simulateur',
            desc: "Court jeu d'humour absurde inspir\u00E9 de Katamari Damacy o\u00F9 le but est d'absorber la Terre en tant qu'ast\u00E9ro\u00EFde.",
            link: 'https://psychowolf960.itch.io/a-ball-game'
        },
        mouse: {
            title: 'Mouse',
            genre: 'Survie / Exp\u00E9rimental',
            desc: "Mini jeu exp\u00E9rimental de survie : une petite souris orange court apr\u00E8s une tranche d'emmental dans un paysage bleu bizarre tout en \u00E9vitant des ast\u00E9ro\u00EFdes mortels.",
            link: 'https://psychowolf960.itch.io/small-orange-mouse-in-weird-blue-landscape-run-after-a-slice-of-emmental-while-b'
        },
        towhere: {
            title: 'ToWhere\u00A0?',
            genre: 'Construction / Pixel Art',
            desc: "Jeu vertical en pixel art centr\u00E9 sur la construction. \u00C9rigez une tour toujours plus haute en pla\u00E7ant et retirant des blocs en temps r\u00E9el selon des r\u00E8gles physiques pr\u00E9cises. Projet en cours de d\u00E9veloppement.",
            link: 'https://lynnboass.itch.io/towhere'
        }
    };

    const modal = document.getElementById('gameModal');
    const modalImg = document.getElementById('gameModalImg');
    const modalTitle = document.getElementById('gameModalTitle');
    const modalGenre = document.getElementById('gameModalGenre');
    const modalDesc = document.getElementById('gameModalDesc');
    const modalLink = document.getElementById('gameModalLink');
    const modalVideo = document.getElementById('gameModalVideo');

    function openGameModal(gameKey, cardEl) {
        const data = gameData[gameKey];
        if (!data) return;

        const cardImg = cardEl.querySelector('.nb-card-img');
        modalImg.src = cardImg ? cardImg.src : '';
        modalImg.alt = data.title;
        modalTitle.textContent = data.title;
        modalGenre.textContent = data.genre;
        modalDesc.textContent = data.desc;
        modalLink.href = data.link;

        if (data.video) {
            modalVideo.href = data.video;
            modalVideo.style.display = 'inline-flex';
        } else {
            modalVideo.style.display = 'none';
        }

        modal.classList.add('active');
    }

    function closeGameModal() {
        modal.classList.remove('active');
    }

    document.querySelectorAll('.game-card[data-game]').forEach(card => {
        card.addEventListener('click', function() {
            openGameModal(this.dataset.game, this);
        });
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal || e.target.classList.contains('game-modal-close')) {
            closeGameModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeGameModal();
        }
    });

    // --- Skill bar animation on scroll ---
    const skillCards = document.querySelectorAll('.skill-card[data-skill-level]');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const level = entry.target.getAttribute('data-skill-level');
                const fill = entry.target.querySelector('.skill-bar-fill');
                if (fill) {
                    setTimeout(() => {
                        fill.style.width = level + '%';
                    }, 200);
                }
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillCards.forEach(card => skillObserver.observe(card));

    // --- Console easter egg ---
    console.log('%cCONSOLE - PORTFOLIO', 'color: #ff6600; font-size: 20px; font-weight: bold;');
    console.log('%c Coucou \uD83D\uDC40 ', 'color: #0066ff; font-size: 14px;');
});

// Debounce utility
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Accessibility: Skip to content
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab' && !document.querySelector('.skip-link')) {
        const skipLink = document.createElement('a');
        skipLink.href = '#about';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Aller au contenu principal';
        skipLink.style.cssText = 'position:absolute;top:-40px;left:6px;background:#ff6600;color:white;padding:8px;text-decoration:none;border:2px solid #000;z-index:1001;font-weight:bold;';
        skipLink.addEventListener('focus', function() { this.style.top = '6px'; });
        skipLink.addEventListener('blur', function() { this.style.top = '-40px'; });
        document.body.insertBefore(skipLink, document.body.firstChild);
    }
});
