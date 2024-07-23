document.addEventListener("DOMContentLoaded", function() {
  function tabsActive(tabPath, tabTarger){
    document.querySelectorAll(tabPath).forEach(item => {
      item.addEventListener("click", function(e){

        let path = e.currentTarget.dataset.path
        document.querySelectorAll(tabTarger).forEach(el => {
          el.classList.remove("catalog__tab-active")
        })
        document.querySelector(`[data-target=${path}]`).classList.add("catalog__tab-active")

        document.querySelectorAll(tabPath).forEach(el => {
          el.classList.remove("border__acrive")
        })
        this.classList.add("border__acrive")
      })
    })


  }
  tabsActive(".catalog__header-tab-btn",".catalog__tab")
  // tabsActive(".accrdion__tab-btn",".catalog__left-content")
})

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".accrdion__tab-btn").forEach(item => {
    item.addEventListener("click", function(e){
      let path = e.currentTarget.dataset.path
      document.querySelectorAll(".catalog__left-content").forEach(el => {
        el.classList.remove("catalog__tab-active")
      })
      console.log(path);
      document.querySelector(`[data-target=${path}]`).classList.add("catalog__tab-active")

    })
  })
})
