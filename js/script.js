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


// ===============================
// HERO ANIMATION
// ===============================

let hero = gsap.timeline();

hero
.from(".navbar",{
    y:-40,
    autoAlpha:0,
    duration:0.8,
    ease:"power3.out"
})
.from(".herotxt",{
    y:40,
    autoAlpha:0,
    duration:0.8,
    ease:"power3.out"
},"-=0.4")
.from(".herop",{
    y:30,
    autoAlpha:0,
    duration:0.7
},"-=0.4")
.from(".hero .submitbtn",{
    scale:0.8,
    autoAlpha:0,
    duration:0.6
});



// ===============================
// FUNCTION FOR FADE UP
// ===============================

function fadeUp(selector){

    gsap.utils.toArray(selector).forEach(item=>{

        gsap.from(item,{
            scrollTrigger:{
                trigger:item,
                start:"top 85%",
                toggleActions:"play none none reverse"
            },

            y:40,
            autoAlpha:0,
            duration:0.8,
            ease:"power3.out"

        });

    });

}



// ===============================
// FUNCTION FOR LEFT / RIGHT
// ===============================


function fadeSide(selector,direction){

    gsap.utils.toArray(selector).forEach(item=>{

        gsap.from(item,{
            scrollTrigger:{
                trigger:item,
                start:"top 85%",
                toggleActions:"play none none reverse"
            },

            x:direction,
            autoAlpha:0,
            duration:0.8,
            ease:"power3.out"

        });

    });

}



// ===============================
// BRANDS
// ===============================

gsap.from(".brand",{

    scrollTrigger:{
        trigger:".brands",
        start:"top 85%"
    },

    y:30,
    autoAlpha:0,
    stagger:0.12,
    duration:0.6

});



// ===============================
// ABOUT
// ===============================

fadeSide(".about-bg",-40);

fadeUp(`
.about-box,
.founder-para-div,
.founder-heading,
.founder-list
`);



// ===============================
// STAND SECTION
// ===============================

fadeSide(".stand .box",-40);
fadeSide(".standbg",40);



// ===============================
// WHY EXIST
// ===============================

fadeSide(".exists .extxt",-40);
fadeSide(".exists .extxtt",40);

fadeUp(`
.exists .unlist,
.exists .htxt,
.exists .htxtp
`);



// ===============================
// CLIENTS
// ===============================

fadeSide(".clientbg",-40);

fadeSide(`
.clienttxt,
.clientp,
.clientp1,
.cllist
`,40);



// ===============================
// PROBLEM CARDS
// ===============================

gsap.from(".p-box",{

    scrollTrigger:{
        trigger:".problems",
        start:"top 80%"
    },

    y:40,
    autoAlpha:0,
    stagger:0.12,
    duration:0.7,
    ease:"power3.out"

});



// ===============================
// WHAT WE DO CARDS
// ===============================

gsap.from(`
.service-card,
.service-card-wide
`,{

    scrollTrigger:{
        trigger:".we-do",
        start:"top 80%"
    },

    y:40,
    autoAlpha:0,
    stagger:0.15,
    duration:0.7,
    ease:"power3.out"

});



// ===============================
// OUTCOMES
// ===============================


gsap.from(".out-box",{

    scrollTrigger:{
        trigger:".outcomes",
        start:"top 80%"
    },

    scale:0.9,
    autoAlpha:0,
    stagger:0.15,
    duration:0.7

});


fadeSide(".outcomes .col-lg-5:first-child",-30);

fadeSide(".outcomes .col-lg-5:last-child",30);



// ===============================
// TEXT STRIP
// ===============================

gsap.from(".work-strip-text img",{

    scrollTrigger:{
        trigger:".typo",
        start:"top 80%"
    },

    scale:0.8,
    autoAlpha:0,
    duration:1

});



// ===============================
// WHY APEX
// ===============================

fadeUp(".why-content");



// ===============================
// FOOTER
// ===============================

fadeUp(".footer-top .container");



// ===============================
// BUTTON HOVER
// ===============================


document.querySelectorAll(".submitbtn,.cta-button")
.forEach(btn=>{


btn.addEventListener("mouseenter",()=>{

    gsap.to(btn,{
        scale:1.05,
        duration:0.25
    });

});


btn.addEventListener("mouseleave",()=>{

    gsap.to(btn,{
        scale:1,
        duration:0.25
    });

});


});