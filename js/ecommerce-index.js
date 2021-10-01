const shopsSwiperWrapper = document.querySelector('.shops-swiper');
const bannerSwiperWrapper = document.querySelector('.ecommerce-banner-swiper');

const shopsSwiper = new Swiper(shopsSwiperWrapper, {
  speed: 1000,
  slidesPerView: 'auto',
  spaceBetween: 20,
  navigation: {
    prevEl: '#shops-swiper-navigation-left',
    nextEl: '#shops-swiper-navigation-right'
  },
  autoplay: true,
  effect: 'creative',
})

const bannerSwiper = new Swiper(bannerSwiperWrapper, {
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.ecommerce-banner-swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  debugger: true,
  autoplay: {
    delay: 3000
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
})