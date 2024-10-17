document.addEventListener('DOMContentLoaded', function() {
    // Hero section carousel
    let currentSlide = 0;
    const slides = [
        'assets/videos/video1.mp4',
        'assets/videos/video2.mp4',
        'assets/videos/video3.mp4'
    ];

    function changeSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        document.querySelector('#hero').style.backgroundImage = `url('${slides[currentSlide]}')`;
    }

    setInterval(changeSlide, 5000);

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Interactive map placeholder
    const map = document.querySelector('#map');
    map.innerHTML = '<div style="padding: 2rem; text-align: center;">Interactive Map Placeholder</div>';

    // Map filter buttons
    document.querySelectorAll('.map-filters button').forEach(button => {
        button.addEventListener('click', function() {
            alert(`Filtering map for ${this.textContent}`);
        });
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector('#newsletter form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with email: ${email}`);
        this.reset();
    });

    // Add hover effect to business cards
    document.querySelectorAll('.business-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
