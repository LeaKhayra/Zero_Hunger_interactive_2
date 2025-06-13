$(document).ready(function() {
    const images = $('.gallery-image');
    let currentIndex = 0;

    // Open lightbox when clicking an image
    images.on('click', function() {
        currentIndex = images.index(this);
        updateLightbox();
        $('#lightbox').fadeIn(300);
    });

    // Close lightbox
    $('.close-btn').on('click', function() {
        $('#lightbox').fadeOut(300);
    });

    // Previous image
    $('.prev-btn').on('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightbox();
    });

    // Next image
    $('.next-btn').on('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateLightbox();
    });

    // Keyboard navigation
    $(document).on('keydown', function(e) {
        if ($('#lightbox').is(':visible')) {
            if (e.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                updateLightbox();
            } else if (e.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % images.length;
                updateLightbox();
            } else if (e.key === 'Escape') {
                $('#lightbox').fadeOut(300);
            }
        }
    });

    // Update lightbox image and alt text
    function updateLightbox() {
        const src = images.eq(currentIndex).attr('src');
        const alt = images.eq(currentIndex).attr('alt');
        $('#lightbox-img').attr({ src: src, alt: alt });
    }
});