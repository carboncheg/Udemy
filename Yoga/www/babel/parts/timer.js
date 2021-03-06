"use strict";

function timer() {
  // Устанавливаем дедлайн
  var deadline = '2019-12-31'; // Рассчитываем оставшееся время

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / 1000 / 60 / 60); // hours = Math.floor((t/1000/60/60) % 24),
    // days = Math.floor((t/1000/60/60/24));

    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  } // Преващаем статичную вёрстку в динамичную


  function setClock(id, endtime) {
    var timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      var t = getTimeRemaining(endtime);
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }

      if (t.seconds <= 9) {
        seconds.textContent = '0' + t.seconds;
      }

      if (t.minutes <= 9) {
        minutes.textContent = '0' + t.minutes;
      }

      if (t.hours <= 9) {
        hours.textContent = '0' + t.hours;
      }

      if (t.total <= 0) {
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }
  }

  setClock('timer', deadline);
}

module.exports = timer;