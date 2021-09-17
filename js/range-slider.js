

$(document).ready(function () {
  const left = $("[name='min-value']")
  const right = $("[name='max-value']")
  const min = Number(left.attr("min"))
  const max = Number(left.attr("max"))

  $('.noUi-handle').on('click', function () {
    $(this).width(50);
  });
  var rangeSlider = document.getElementById('slider-range');
  var moneyFormat = wNumb({
    decimals: 0,
    thousand: ',',
    prefix: '$'
  });
  console.log()
  noUiSlider.create(rangeSlider, {
    start: [min, max],
    step: 1,
    range: {
      'min': [min],
      'max': [max]
    },
    format: moneyFormat,
    connect: true
  });

  // Set visual min and max values and also update value hidden form inputs
  rangeSlider.noUiSlider.on('update', function (values, handle) {
    document.getElementById('slider-range-value1').innerHTML = values[0];
    document.getElementById('slider-range-value2').innerHTML = values[1];
    document.getElementsByName('min-value').value = moneyFormat.from(
      values[0]);
    document.getElementsByName('max-value').value = moneyFormat.from(
      values[1]);
  });
});

