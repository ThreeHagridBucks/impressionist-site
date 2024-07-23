new Swiper(".developments-swiper", {
  cssMode: true,

  pagination: {
    el: ".swiper-pagination-developments",
    type: "fraction"
  },

  navigation: {
    nextEl: ".developments-btn--next",
    prevEl: ".developments-btn--prev"
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
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 27
    },
    // >=768px
    711: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 34
    },
    1: {
      pagination: {
        el: ".swiper-pagination-developments",
        clickable: true,
        type:"bullets",
      },
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    },


},

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }


});
