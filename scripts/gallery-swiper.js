new Swiper(".mySwiper", {
  // slidesPerView: 3,
  // slidesPerGroup: 3,
  // grid: {
  //     rows: 2
  // },
  // spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination-gallery",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-btn--next",
    prevEl: ".swiper-btn--prev"
  },

  breakpoints: {
    // >=1920px
    1366: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 50
    },
    // >=768px
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 34
    },
    580: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 10
    },
    1: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    },
  // 1023: {
  //   slidesPerView: 2,
  //   slidesPerGroup: 2,
  //   grid: {
  //     rows: 3
  //   },
  //   spaceBetween: 34
  // },

},

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }


});


// модальное окно

let swiperSlides = document.querySelector(".gallery").querySelectorAll(".swiper-slide");
let modal = document.querySelector(".gallery__swiper-section-modal");
let modalBtn = modal.querySelector(".gallery__modal-btn-close");
swiperSlides.forEach(el => {
  el.addEventListener("click", function() {
    let img = this.querySelector(".swiper-slide--img");
    let link = img.getAttribute("src");
    modal.classList.add("modal-active");
    modal.querySelector("img").setAttribute("src", link);

    let info = this.querySelector(".gallery__slide-info");
    let title = info.querySelector(".gallery__modal-title").innerText
    let subtext = info.querySelector(".gallery__modal-subtext").innerText
    let first_data = info.querySelector(".gallery__modal-first-data").innerText
    let second_data = info.querySelector(".gallery__modal-second-data").innerText
    let text = info.querySelector(".gallery__modal__text").innerText
    modal.querySelector(".gallery__modal-title").innerHTML=title;
    modal.querySelector(".gallery__modal-subtext").innerHTML=subtext;
    modal.querySelector(".gallery__modal-first-data").innerHTML=first_data;
    modal.querySelector(".gallery__modal-second-data").innerHTML=second_data;
    modal.querySelector(".gallery__modal__text").innerHTML=text;


  })
})
modalBtn.addEventListener("click", function() {
  modal.classList.remove("modal-active");
});
