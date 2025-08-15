document.addEventListener('DOMContentLoaded', () => {
    // Aquí podemos añadir interactividad en el futuro.
    
    // Ejemplo: Manejo del formulario para mostrar un mensaje de éxito.
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        // Prevenimos que la página se recargue (Formspree lo maneja)
        setTimeout(() => {
            contactForm.reset();
            alert('¡Gracias por tu mensaje! Te contactaré pronto.');
        }, 1000); // Pequeña demora para asegurar el envío
    });
});