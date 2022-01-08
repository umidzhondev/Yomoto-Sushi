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
  });