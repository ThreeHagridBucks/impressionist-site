

document.addEventListener('DOMContentLoaded', function() {
  function multi_repeat(f,dmsec,times) {
    function foo() {
        setTimeout(foo,dmsec);
        for(var i = 0; i < times; i++) {
            f();
        }
    }
    setTimeout(foo,dmsec);
  }

  function the_alert() {
    document.querySelectorAll('.swiper-slide-visible').forEach(function(swiper){
      swiper.classList.add('animation')
      console.log(swiper)
    });
    document.querySelectorAll('.swiper-slide').forEach(function(swiper){
      console.log(swiper)
      swiper.classList.remove('animation')
    });
  }
  multi_repeat(the_alert,2000,3);

})
