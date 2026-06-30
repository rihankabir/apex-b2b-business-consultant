document.querySelectorAll(".brand").forEach((logo) => {

    logo.addEventListener("mouseenter", () => {
        gsap.to(logo, {
            scale: 1.1,
            y: -5,
            duration: 0.3
        });
    });

    logo.addEventListener("mouseleave", () => {
        gsap.to(logo, {
            scale: 1,
            y: 0,
            duration: 0.3
        });
    });

});