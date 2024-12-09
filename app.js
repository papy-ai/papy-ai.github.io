// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

function toggleMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('open');
}

hamburger.addEventListener('click', toggleMenu);

// Smooth Scroll for Links
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth',
            });
        }

        // Close the menu on mobile after clicking
        if (navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});

function navigateTo(page) {
    window.location.href = page;
  }