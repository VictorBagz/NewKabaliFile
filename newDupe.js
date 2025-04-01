document.addEventListener('DOMContentLoaded', () => {
    // Rotating Tagline with a 2-Second Delay and Smoother Animation
    const tagline = document.getElementById('tagline');
    const taglines = [
        "Building Your Future",
        "Strength in Every Structure",
        "Crafting Excellence",
        "Your Vision, Our Craft"
    ];
    let index = 0;

    function rotateTagline() {
        tagline.style.opacity = 0;
        setTimeout(() => {
            tagline.textContent = taglines[index];
            tagline.style.opacity = 1;
            index = (index + 1) % taglines.length;
        }, 300); // Smooth fade out/in with shorter delay
    }

    setInterval(rotateTagline, 2000); // Rotate every 2 seconds
    rotateTagline();

    // Counter Animation Function
    function animateCounter(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const current = Math.floor(progress * (end - start) + start);
            element.textContent = current;
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                element.textContent = end + "+";
                element.classList.add('plus');
                element.classList.add('animate');
            }
        };
        requestAnimationFrame(step);
    }

    // Initialize Counters After Full Page Load
    window.addEventListener('load', () => {
        const projectsCounterElement = document.getElementById('projectsCounter');
        const clientsCounterElement = document.getElementById('clientsCounter');

        if (projectsCounterElement && clientsCounterElement) {
            // Reset counters to 0
            projectsCounterElement.textContent = "0";
            clientsCounterElement.textContent = "0";

            // Start counters with a smoother animation over 4 seconds
            setTimeout(() => {
                animateCounter(projectsCounterElement, 0, 99, 4000); // Projects: 0 to 99 over 4s
                animateCounter(clientsCounterElement, 0, 75, 4000); // Clients: 0 to 75 over 4s
            }, 200); // Delay slightly after page load
        }
    });

    // Accordion and Fullscreen Handling
    document.querySelectorAll('.accordn-header').forEach((header) => {
        header.addEventListener('click', () => {
            const fullscreen = document.querySelector('.fullscreen');
            const fullscreenContent = document.querySelector('.fullscreen-content');
            const content = header.nextElementSibling?.innerHTML;
            if (fullscreen && fullscreenContent) {
                fullscreenContent.innerHTML = content || '';
                fullscreen.classList.add('active');
            }
        });
    });

    const cancelBtn = document.querySelector('.cancel');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            document.querySelector('.fullscreen')?.classList.remove('active');
        });
    }
});

 //ADDITIONS
 
const navIcon = document.querySelector('.bi-list');
const dropdownMenu = document.querySelector('.dropdown-menu');

navIcon.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
});

// Select the Back to Top button
const backToTopButton = document.getElementById('backToTop');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Show after scrolling down 300px
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll back to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling effect
    });
});
