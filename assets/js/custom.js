let currentKenstarIndex = 0;

function moveKenstarSlide(direction) {
    const slider = document.querySelector('.kenstar-slider-container');
    const productCards = document.querySelectorAll('.kenstar-product-card');
    const totalProducts = productCards.length;
    
    currentKenstarIndex += direction;

    if (currentKenstarIndex < 0) {
        currentKenstarIndex = totalProducts - 1; // Go to the last slide
    }
    if (currentKenstarIndex >= totalProducts) {
        currentKenstarIndex = 0; // Go to the first slide
    }

    // Adjust the slider position based on currentKenstarIndex
    const newTransformValue = -currentKenstarIndex * 33.33; // Adjust width based on the number of visible slides
    slider.style.transform = `translateX(${newTransformValue}%)`;
}

// Optional: Auto slide (can be removed if not needed)
setInterval(() => moveKenstarSlide(1), 5000); // Change slide every 5 seconds
