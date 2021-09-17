const product_carousel = document.getElementsByClassName("product-view__swiper")[0];
const suggestedProductsC = document.getElementsByClassName("suggested-products-carousel")[0];

const swiper = new Swiper(product_carousel, {
  speed: 1200,
  direction: 'vertical',
  slidesPerView: 'auto',
  spaceBetween: 10,
  freeMode: true,
  breakpoints: {
    1200: {
      slidesPerView: 'auto',
      spaceBetween: 10
    }
  }
})

const suggestedProductsCaorusel = new Swiper(suggestedProductsC, {
  speed: 1200,
  slidesPerView: 'auto',
  spaceBetween: 20,
  freeMode: true,
  // breakpoints: {
  //   1200: {
  //     slidesPerView: 'auto',
  //     spaceBetween: 10
  //   }
  // }
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
})