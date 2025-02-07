let currentKenstarIndex = 0;

function moveKenstarSlide(direction) {
    const slider = document.querySelector('.kenstar-slider-container');
    const productCards = document.querySelectorAll('.kenstar-product-card');
    const totalProducts = productCards.length;
    const itemsPerSlide = 3; // Number of visible items per slide

    // Make sure we have products to slide
    if (totalProducts === 0) return;

    // Adjust the current index with the direction (forward or backward)
    currentKenstarIndex += direction;

    // Loop back to the beginning if we reach the end (infinite scrolling)
    if (currentKenstarIndex < 0) {
        currentKenstarIndex = totalProducts - itemsPerSlide; // Go to the last slide
    }

    // Ensure it does not go beyond the last slide
    if (currentKenstarIndex >= totalProducts - itemsPerSlide + 1) {
        currentKenstarIndex = 0; // Go to the first slide
    }

    // Calculate how much the slider needs to move to show the next set of items
    const newTransformValue = -currentKenstarIndex * (100 / itemsPerSlide); // Adjust percentage based on the number of items per slide
    slider.style.transform = `translateX(${newTransformValue}%)`;
}

// Optional: Auto slide (can be removed if not needed)
setInterval(() => moveKenstarSlide(1), 5000); // Change slide every 5 seconds
