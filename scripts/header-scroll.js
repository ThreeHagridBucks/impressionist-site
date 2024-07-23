
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".header__simplebar").forEach(item => {
    new SimpleBar(item, {
      /* чтобы изначально ползунок был виден */
      autoHide: false,
      /* с помощью этого значения вы можете управлять высотой ползунка*/
      scrollbarMaxSize: 28,
    });

  });
});
