const color_links = [...document.querySelectorAll("[color-link]")],
  preloader = document.querySelector(".product-details__preloader"),
  colors_wrapper = document.querySelector('[colors-wrapper]'),
  amount = [...document.querySelectorAll(".product-details__amount--ofproduct")],
  increase = [...document.querySelectorAll("[data-increase-btn]")],
  decrease = [...document.querySelectorAll("[data-decrease-btn]")],
  product_img_btns = [...document.querySelectorAll("[data-product-img]")],
  product_main_img = document.querySelector("[data-main-img]");


product_img_btns.forEach(btn => btn.addEventListener("click", () => changeMainImg(btn)));

function changeMainImg(btn) {
  const img = btn.querySelector("img").src;

  if (product_main_img.src !== img) {
    product_main_img.style.opacity = "0.2"
    product_main_img.style.transform = "scale(1.02)"
    product_main_img.src = img;

    timeout()
    clearTimeout(timeout)
  }
}

function timeout() {
  console.log('worked')
  setTimeout(() => {
    product_main_img.style.transform = "scale(1)"
    product_main_img.style.opacity = "1"
  }, 300)
}

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    preloader.classList.add("visually-hidden")
    colors_wrapper.classList.remove("visually-hidden");
  }
}

color_links.forEach(link => {
  const color = link.dataset["color"];
  const child = link.children[0]

  child.style.backgroundColor = color;

  if (link.classList.contains("active")) {
    link.style.border = `1px solid ${color}`;
    link.style.padding = "2px"
  }
});

[increase, decrease].forEach(collectionBtn => {
  collectionBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => changeAmount(btn, i));
  })
})

function changeAmount(btn, i) {
  const $amount = parseInt(btn.dataset['amount']);
  const type = btn.dataset['type'] || btn.dataset['type'];
  let value = parseInt(amount[i].textContent)

  if (type === 'increase') {
    value += $amount;

    amount[i].innerHTML = value
  } else if (type === 'decrease') {
    if (value === 0) {
      value === 0;

      amount[i].innerHTML = value;
    } else {
      value -= $amount;

      amount[i].innerHTML = value
    }
  }
}
// Select

$('.product-details__select select').niceSelect()