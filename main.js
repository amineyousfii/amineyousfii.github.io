const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");
      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }
// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});
body.addEventListener("click" , e =>{
    let clickedElm = e.target;
    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});

// Typing Text //

let typed = new Typed (".auto-input", {
  strings: ["Front End Developer", "WordPress Developer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
})

/* 
 Gsap Animation : Hero Section Skills */

gsap.registerPlugin(ScrollTrigger);

const heroTl = gsap.timeline({
    ScrollTrigger: {
        Trigger: "#hero",
          start: "top bottom",
          toggleActions: "play none restart none",
    },
});

heroTl.from(".hero__illustration", {
    y: 30,
    opacity: 0,
});

heroTl.from(".hero__illustration__img", {
   rotate: -90, 
   repeat: -1,
   yoyo: true,
   duration: 10, 
});

gsap.from(".hero__illustration__text", {
    y: "-175px", 
    repeat: -1, 
    duration: 10,
    yoyo: true,
    opacity: 1,
    Delay: 2, 
 });


 // New GSAP //

 TweenMax.from(".logo", 1, {
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
 })

 TweenMax.staggerFrom(".nav-links", 1, {
    opacity: 0,
    x: 20,
    ease: Power3.easeInOut
 }, 0.08)

 TweenMax.from(".dark-light", 1, {
    opacity: 1,
    delay: .6,
    x: -20,
    ease: Expo.easeInOut
 })
//
 TweenMax.from(".home-content", 1, {
    opacity: 1,
    delay: 1,
    x: 15,
    ease: Expo.easeInOut
 })



// Infinite Scroll Animation //

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}


// Testimonial //

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




// SCROLL REVEAL ANIMATION  //

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home-content,
           .about__content, .service,
           .portfolio-content, .container, .testimonial mySwiper, .contactInfo,
           .contactInfoBx, .formBx`,{
    interval: 400
})


// Scroll Button //

document.addEventListener('DOMContentLoaded', function () {
  const progressBar = document.getElementById('progressbar-container');

  window.addEventListener('scroll', function () {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = `${progress}%`;
  });

  // Smooth scroll function
  function scrollTo(elementId) {
      const element = document.getElementById(elementId);
      window.scrollTo({
          behavior: 'smooth',
          top: element.offsetTop,
      });
  }
});


// Preloader Animation //


window.addEventListener('load', function () {
  const preloader = document.querySelector('.preloader');
  preloader.style.display = 'none';
});