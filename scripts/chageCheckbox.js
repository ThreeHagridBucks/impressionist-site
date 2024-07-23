





document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.editorials__checkbox-text').forEach(item => {
    item.addEventListener("click", function() {
      var state = item.getAttribute('aria-checked')
        if (state === 'true') {
          item.setAttribute('aria-checked', "false");
        }
        else{
          item.setAttribute('aria-checked', "true");
        }
    })
  })
})


