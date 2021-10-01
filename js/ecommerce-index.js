const shopsSwiperWrapper = document.querySelector('.shops-swiper');
const bannerSwiperWrapper = document.querySelector('.ecommerce-banner-swiper');
const open_btn = document.getElementById("open-filter");
const close_btn = document.getElementById("close-filter");
const filter_wrapper = document.querySelector(".ecommerce-sidebar");

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
const { open, close, target, body } = {
  open: open_btn,
  close: close_btn,
  target: filter_wrapper,
  body: document.documentElement
}

open.addEventListener("click", function () {
  target.classList.add('show');
})

close.addEventListener("click", function () {
  target.classList.remove("show");
})
