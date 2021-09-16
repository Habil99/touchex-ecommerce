var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween:  150,
    // freeMode: true,
    centeredSlides: true,
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween:100,
            // freeMode: true,
            centeredSlides: true,
         });
    } 
  })
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 600) {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween:300,
            freeMode: true,
            // centeredSlides: true,
          });
    } 
  })



  

  