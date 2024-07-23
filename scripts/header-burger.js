
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.header__burger').forEach(function(burger){
    burger.addEventListener('click', function() {
      document.querySelector('.burger-box').classList.toggle('burger-active')
    })
  })

})





