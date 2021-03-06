"use strict";

function calc() {
  // Калькулятор
  var persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0;
  totalValue.textContent = 0;
  persons.addEventListener('input', function () {
    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value == '') {
      totalValue.textContent = 0;
    } else {
      totalValue.textContent = total;
    }
  });
  restDays.addEventListener('input', function () {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (persons.value == '') {
      totalValue.textContent = 0;
    } else {
      totalValue.textContent = total;
    }
  });
  place.addEventListener('input', function () {
    if (persons.value == '' || restDays.value == '') {
      totalValue.textContent = 0;
    } else {
      var a = total;
      totalValue.textContent = a * this.options[this.selectedIndex].value;
    }
  });
}

module.exports = calc;