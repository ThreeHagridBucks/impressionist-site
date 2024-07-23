document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".header__down-btn").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".header__dropdown-container");

    document.querySelectorAll(".header__down-btn").forEach(el => {
      if (el != btn) {
        el.classList.remove("active--btn");
      }
    });

    document.querySelectorAll(".header__dropdown-container").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("active");
      }
    })
    dropdown.classList.toggle("active");
    btn.classList.toggle("active--btn")
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".header__down-items")) {
    document.querySelectorAll(".header__dropdown-container").forEach(el => {
        el.classList.remove("active");
    })
     document.querySelectorAll(".header__down-btn").forEach(el => {
        el.classList.remove("active--btn");
    });
  }
})
})
