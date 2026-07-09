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
const goTop = document.getElementById("goTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        goTop.style.display = "flex";
    } else {
        goTop.style.display = "none";
    }
});

goTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


  //preloader
  $(window).on("load", function () {
    $("#preloader").delay(300).fadeOut(500);
});
gsap.registerPlugin(ScrollTrigger);




gsap.from(".hero", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top 80%"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out"
});