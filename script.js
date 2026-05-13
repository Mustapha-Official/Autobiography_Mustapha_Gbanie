/* ==========================================
   MUSTAPHA GBANIE WEBSITE - SCRIPT JS
========================================== */

// ----------  MOBILE MENU ----------
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    // Change icon between bars & X
    const icon = menuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});

// Close mobile menu when link clicked
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const icon = menuBtn.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
});


// ----------  STICKY NAVBAR ----------
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});


// ----------  INSPIRATION SLIDER ----------
const inspirationSlider = document.getElementById('inspirationSlider');
const inspirationPrev = document.getElementById('inspirationPrev');
const inspirationNext = document.getElementById('inspirationNext');
let inspIndex = 0;
const inspSlideWidth = 300; // matches card width + gap

inspirationNext.addEventListener('click', () => {
    const maxSlides = inspirationSlider.children.length - 1;
    if (inspIndex < maxSlides) {
        inspIndex++;
        inspirationSlider.style.transform = `translateX(-${inspIndex * inspSlideWidth}px)`;
    }
});

inspirationPrev.addEventListener('click', () => {
    if (inspIndex > 0) {
        inspIndex--;
        inspirationSlider.style.transform = `translateX(-${inspIndex * inspSlideWidth}px)`;
    }
});


// ----------  FAQ / PEOPLE ASK SLIDER ----------
const faqSlider = document.getElementById('faqSlider');
const faqPrev = document.getElementById('faqPrev');
const faqNext = document.getElementById('faqNext');
let faqIndex = 0;
const faqSlideWidth = 300;

faqNext.addEventListener('click', () => {
    const maxSlides = faqSlider.children.length - 1;
    if (faqIndex < maxSlides) {
        faqIndex++;
        faqSlider.style.transform = `translateX(-${faqIndex * faqSlideWidth}px)`;
    }
});

faqPrev.addEventListener('click', () => {
    if (faqIndex > 0) {
        faqIndex--;
        faqSlider.style.transform = `translateX(-${faqIndex * faqSlideWidth}px)`;
    }
});


// ----------  SMOOTH SCROLL FOR NAV LINKS ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// ----------  SCROLL REVEAL ANIMATION ----------
const revealSections = document.querySelectorAll('section');

const revealOnScroll = () => {
    revealSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
};

// Initialize
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


// ---------- ADD ACTIVE CLASS ON NAV SCROLL ----------
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.navbar a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
