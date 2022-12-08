/* -- Carousel Navigation -- */

let activeIndex = 0;


var dark = true;

const slides = document.getElementsByTagName("article");
const last_slide = slides.length-1;

var swiper = new Swiper(".mySwiper0", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  mousewheel: {
    forceToAxis: true,
    sensitivity: 1,
    releaseOnEdges: true,
  },
});

const handleLeftClick = () => {
  console.log(activeIndex);
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
    nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

  currentSlide.dataset.status = "after";

  nextSlide.dataset.status = "becoming-active-from-before";

  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

const handleRightClick = () => {
  console.log(activeIndex);
  const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;

  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
    nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

  currentSlide.dataset.status = "before";

  nextSlide.dataset.status = "becoming-active-from-after";

  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}
var swiper0 = new Swiper(`.mySwiper0`, {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  spped: 100,
  loop: true,
  mousewheel: true,
  mousewheel: {
    forceToAxis: true,
    sensitivity: 1,
    releaseOnEdges: true,
  },
});
var swiper1 = new Swiper(`.mySwiper1`, {
  direction: "vertical",
  slidesPerView: 1,
  loop: true,
  spaceBetween: 0,
  mousewheel: true,
  mousewheel: {
    forceToAxis: true,
    sensitivity: 1,
    releaseOnEdges: true,
  },
});
var swiper2 = new Swiper(`.mySwiper2`, {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  mousewheel: true,
  mousewheel: {
    forceToAxis: true,
    sensitivity: 1,
    releaseOnEdges: true,
  },
});
var swiper3 = new Swiper(`.mySwiper3`, {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  mousewheel: true,
  mousewheel: {
    forceToAxis: true,
    sensitivity: 1,
    releaseOnEdges: true,
  },
});
var swiper4 = new Swiper(`.mySwiper4`, {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  mousewheel: true,
  mousewheel: {
    forceToAxis: true,
    sensitivity: 1,
    releaseOnEdges: true,
  },
});
var swiper5 = new Swiper(`.mySwiper5`, {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  mousewheel: true,
  mousewheel: {
    forceToAxis: true,
    sensitivity: 1,
    releaseOnEdges: true,
  },
});


const handlePulsClick = (index) => {
  console.log(activeIndex);

  switch (index) {
    case 0:
      swiper0.slideNext();
    case 1:
      swiper1.slideNext();
    case 2:
      swiper2.slideNext();
    case 3:
      swiper3.slideNext();
    case 4:
      swiper4.slideNext();
    case 5:
      swiper5.slideNext();
  }
}

/* -- Mobile Nav Toggle -- */

const nav = document.querySelector("nav");

const handleNavToggle = () => {
  nav.dataset.transitionable = "true";
  nav.dataset.toggled = nav.dataset.toggled === "true" ? "false" : "true";
}

// Select the button
const btn = document.querySelector('.btn-toggle');

// Listen for a click on the button
btn.addEventListener('click', function () {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle('dark-theme');
  dark = !dark;
  console.log(dark)
})


window.matchMedia("(max-width: 800px)").onchange = e => {
  nav.dataset.transitionable = "false";

  nav.dataset.toggled = "false";
};


