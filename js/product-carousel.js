const product_carousel = document.getElementsByClassName("product-view__swiper")[0];

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