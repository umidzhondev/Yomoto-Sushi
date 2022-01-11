 
const swiper = new Swiper(".clients__slider", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  mousewheel: true,
  autoplay: {
    delay: 2000,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 5
      },
      510: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      650: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
