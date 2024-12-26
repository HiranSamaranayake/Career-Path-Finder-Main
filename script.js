document.addEventListener("DOMContentLoaded", function () {
    // Function to add animation classes when elements enter the viewport
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeInUp'); // Apply fade-in-up animation on scroll
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, { threshold: 0.5 });

    // Elements to animate
    const sections = document.querySelectorAll('.section1, .section2, .section3, .section4, .footer');
    sections.forEach(section => observer.observe(section));

    // Scroll animations for videos
    const videos = document.querySelectorAll('video');
    const videoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('videoFadeIn'); // Apply video fade-in animation
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    videos.forEach(video => videoObserver.observe(video));

    // Navbar background change on scroll
    window.onscroll = function () {
        const navbar = document.querySelector('nav');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
