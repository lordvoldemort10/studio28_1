// Wacht tot het document volledig is geladen
document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript is geladen en klaar.");

    // Initialisatie van de Bootstrap Carousel
    const carouselElement = document.querySelector('#artCarousel');
    if (carouselElement) {
        $(carouselElement).carousel({
            interval: 3000, // Stelt de interval in voor 3 seconden per afbeelding
            ride: 'carousel'
        });
    }

    // Smooth scroll voor de navigatielinks in de sidebar
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Event listener voor mouse hover op social media iconen in de footer
    const socialIcons = document.querySelectorAll('.social-icons a');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            this.style.color = '#ffc107';
        });
        
        icon.addEventListener('mouseout', function() {
            this.style.color = 'white';
        });
    });

    // Contactformulier validatie (als aanvulling op HTML5 vereiste attributen)
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert("Vul alstublieft alle velden in.");
                event.preventDefault();
            } else {
                alert("Bedankt voor uw bericht! Wij nemen spoedig contact met u op.");
            }
        });
    }
    
    // Toekomstige uitbreidingen voor dynamische elementen
    console.log("Extra interactieve elementen kunnen hier worden toegevoegd.");
});
