// Tooltip initialization
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

// Smooth scrolling for anchor links
$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});

// script.js file

// Initialize Intersection Observer to add class when scrolled into view
document.addEventListener("DOMContentLoaded", function () {
    const options = {
        root: null, // use viewport as root
        rootMargin: "0px", // no margin around the viewport
        threshold: 0.5 // trigger when 50% of the card is in the viewport
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active"); // Add active class when in view
            } else {
                entry.target.classList.remove("active"); // Remove active class when out of view
            }
        });
    }, options);

    // Target all the cards for animation
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        observer.observe(card);
    });
});





