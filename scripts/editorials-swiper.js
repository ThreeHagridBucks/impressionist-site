new Swiper(".editorials-Swiper", {

  pagination: {
    el: ".swiper-pagination-editorials",
    type: "fraction"
  },
  navigation: {
    nextEl: ".editorials-btn--next",
    prevEl: ".editorials-btn--prev"
  },

  breakpoints: {
    // >=1920px
    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    },
    // >=1024px
    1300: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 49
    },
    // >=768px
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 45
    },
    500: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 10
    },
    1: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 3
    },

},

  // a11y: {
  //   prevSlideMessage: 'Предыдущий',
  //   nextSlideMessage: 'Следующий',
  // }


});
