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

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);


// =================================
// PAGE LOAD REFRESH
// =================================

window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});



// =================================
// HERO ANIMATION
// =================================

let heroTimeline = gsap.timeline();

heroTimeline
.from(".navbar", {
    y:-40,
    autoAlpha:0,
    duration:0.8,
    ease:"power3.out"
})
.from(".herotxt", {
    y:40,
    autoAlpha:0,
    duration:0.8,
    ease:"power3.out"
},"-=0.4")
.from(".herop", {
    y:30,
    autoAlpha:0,
    duration:0.7
},"-=0.4")
.from(".hero .submitbtn", {
    scale:0.8,
    autoAlpha:0,
    duration:0.6
});



// =================================
// COMMON ANIMATION FUNCTIONS
// =================================


function fadeUp(elements){

    gsap.utils.toArray(elements).forEach(element=>{

        gsap.fromTo(element,

        {
            y:40,
            autoAlpha:0
        },

        {
            y:0,
            autoAlpha:1,
            duration:0.8,
            ease:"power3.out",

            scrollTrigger:{
                trigger:element,
                start:"top 90%",
                toggleActions:"play none none none"
            }

        });

    });

}




function fadeLeft(elements){

    gsap.utils.toArray(elements).forEach(element=>{

        gsap.fromTo(element,

        {
            x:-40,
            autoAlpha:0
        },

        {
            x:0,
            autoAlpha:1,
            duration:0.8,
            ease:"power3.out",

            scrollTrigger:{
                trigger:element,
                start:"top 90%",
                toggleActions:"play none none none"
            }

        });

    });

}





function fadeRight(elements){

    gsap.utils.toArray(elements).forEach(element=>{

        gsap.fromTo(element,

        {
            x:40,
            autoAlpha:0
        },

        {
            x:0,
            autoAlpha:1,
            duration:0.8,
            ease:"power3.out",

            scrollTrigger:{
                trigger:element,
                start:"top 90%",
                toggleActions:"play none none none"
            }

        });

    });

}





// =================================
// BRAND LOGOS
// =================================


gsap.fromTo(".brand",

{
    y:30,
    autoAlpha:0
},

{
    y:0,
    autoAlpha:1,
    duration:.7,
    stagger:.15,

    scrollTrigger:{
        trigger:".brands",
        start:"top 85%"
    }

});




// =================================
// ABOUT
// =================================


fadeLeft(".about-bg");

fadeUp(`
.about-box,
.founder-para-div,
.founder-heading,
.founder-list
`);




// =================================
// STAND SECTION
// =================================


fadeLeft(".stand .box");

fadeRight(".standbg");




// =================================
// WHY WE EXIST
// =================================


fadeUp(".existstxt");

fadeLeft(`
.extxt,
.exists .unlist,
.exists .htxt
`);


fadeRight(`
.extxtt,
.exists .htxtp
`);




// =================================
// CLIENTS
// =================================


fadeLeft(".clientbg");

fadeRight(`
.clienttxt,
.clientp,
.clientp1,
.cllist
`);




// =================================
// PROBLEM BOXES
// =================================


gsap.utils.toArray(".p-box").forEach(box=>{


gsap.fromTo(box,

{
    y:40,
    autoAlpha:0
},

{
    y:0,
    autoAlpha:1,
    duration:.7,

    scrollTrigger:{
        trigger:box,
        start:"top 90%"
    }

});


});





// =================================
// WHAT WE DO
// =================================


fadeLeft(`
.dotxt,
.wedtxt
`);


fadeRight(".wertxt");




// SERVICE CARDS
// =================================


gsap.utils.toArray(".service-card, .service-card-wide")
.forEach(card=>{


gsap.fromTo(card,

{
    y:50,
    autoAlpha:0
},

{
    y:0,
    autoAlpha:1,
    duration:.8,

    scrollTrigger:{
        trigger:card,
        start:"top 90%"
    }

});


});




// =================================
// OUTCOMES
// =================================


gsap.fromTo(".out-box",

{
    scale:.85,
    autoAlpha:0
},

{
    scale:1,
    autoAlpha:1,
    duration:.8,
    stagger:.15,

    scrollTrigger:{
        trigger:".outcomes",
        start:"top 85%"
    }

});



fadeLeft(".outcomes .col-lg-5:first-child");

fadeRight(".outcomes .col-lg-5:last-child");




// =================================
// TYPO IMAGE
// =================================


gsap.fromTo(".work-strip-text img",

{
    scale:.8,
    autoAlpha:0
},

{
    scale:1,
    autoAlpha:1,
    duration:1,

    scrollTrigger:{
        trigger:".typo",
        start:"top 85%"
    }

});




// =================================
// WHY APEX
// =================================


fadeUp(".why-content");




// =================================
// FOOTER
// =================================


fadeUp(".footer-top .container");




// =================================
// BUTTON HOVER
// =================================


document.querySelectorAll(".submitbtn,.cta-button")
.forEach(button=>{


button.addEventListener("mouseenter",()=>{

gsap.to(button,{
    scale:1.05,
    duration:.25
});

});


button.addEventListener("mouseleave",()=>{

gsap.to(button,{
    scale:1,
    duration:.25
});

});


});

// ==============================
// CTA MODAL
// ==============================


const modal = document.getElementById("ctaModal");

const closeModal = document.getElementById("closeModal");


const ctaButtons = document.querySelectorAll(
".cta-button, .submitbtn"
);



ctaButtons.forEach(button=>{


button.addEventListener("click",(e)=>{

e.preventDefault();


modal.classList.add("active");



gsap.from(".cta-modal-box",{

scale:.7,

opacity:0,

duration:.5,

ease:"back.out(1.7)"

});


});


});





closeModal.addEventListener("click",()=>{

modal.classList.remove("active");

});





modal.addEventListener("click",(e)=>{


if(e.target === modal){

modal.classList.remove("active");

}


});

$("#ctaForm input, #ctaForm textarea").on("keyup blur", function () {
    $(this).next(".error").remove();
});