document.addEventListener('DOMContentLoaded', () => {
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