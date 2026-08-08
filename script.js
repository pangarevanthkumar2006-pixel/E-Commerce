document.addEventListener("DOMContentLoaded", () => {

    const slider = document.getElementById("heroSlider");

    if (slider) {

        const carousel = new bootstrap.Carousel(slider, {
            interval: 3000,
            ride: "carousel",
            pause: false,
            wrap: true,
            touch: true
        });

        // Start the carousel
        carousel.cycle();
    }

});