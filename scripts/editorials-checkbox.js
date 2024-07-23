let btn = document.querySelector(".editorials__subtext");
let checklist = document.querySelector(".editorials_form-checkbox");
btn.addEventListener("click", function() {
  checklist.classList.toggle("checklist__active");
  document.querySelectorAll(".editorials__label-checkbox").forEach(el => {
    el.classList.toggle("active");
    el.querySelectorAll(".editorials__input").forEach(inp_ => {
      if (inp_.checked) {
        el.classList.add("active");
        console.log(el, inp_)
      }
    })
    })
  });







document.querySelectorAll(".editorials__label-checkbox").forEach(el => {
  el.addEventListener("click", function() {
    let label = this;
    if (!checklist.classList.contains("checklist__active")) {
      label.classList.remove("active");
    }
  });
})
