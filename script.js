document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA AÑADIDA PARA EL MENÚ DE NAVEGACIÓN ---
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        // Si el scroll vertical es mayor a 50px, añade la clase 'scrolled'
        // Si no, la quita.
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Manejo del formulario para mostrar un mensaje de éxito.
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        setTimeout(() => {
            contactForm.reset();
            alert('¡Gracias por tu mensaje! Te contactaré muy pronto!! ;)');
        }, 1000);
    });

    // LÓGICA PARA LA ANIMACIÓN DE SCROLL
    const sections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Opcional: deja de observar una vez que es visible
            }
        });
    }, {
        threshold: 0.1 // La animación se activa cuando el 10% del elemento es visible
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});