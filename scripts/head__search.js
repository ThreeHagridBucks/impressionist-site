document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.form-btn__open').forEach(function(burger){
    burger.addEventListener('click', function() {
      document.querySelector('.header__search-box').classList.add('header__search-active')
      document.querySelector('.header__search-box').classList.remove('header__search-close')
      if (window.innerWidth<=1023){
        document.querySelectorAll('.form').forEach(function(form){
          form.classList.remove('form__active')
        })
        document.querySelectorAll('.form-btn__open').forEach(function(btn){
          btn.classList.remove('active')
        })
      }
    })

  })


  document.querySelectorAll('.header__close-form-btn').forEach(function(burger){
    burger.addEventListener('click', function() {
      document.querySelector('.header__search-box').classList.remove('header__search-active')
      document.querySelector('.header__search-box').classList.add('header__search-close')


    })
  })
})
