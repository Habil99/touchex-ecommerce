const product_carousel = document.getElementsByClassName("product-view__swiper")[0];
const suggestedProductsC = document.getElementsByClassName("suggested-products-carousel")[0];

let desktop = true;
let dir = 'vertical'

determineDeviceW()
window.onresize = () => determineDeviceW()

function determineDeviceW() {
  if (window.innerWidth > 768) {
    desktop = true
    setSwiper(desktop)
  } else {
    desktop = false
    setSwiper(desktop)
  }
}

setSwiper(desktop)

function setSwiper(desktop) {
  new Swiper(product_carousel, {
    speed: 1200,
    direction: desktop === true ? 'vertical' : 'horizontal',
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
}

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