"use strict";

require("core-js/modules/web.dom.iterable");

function modal() {
  // Модальное окно 'Узнать больше'
  var more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      popupClose = document.querySelector('.popup-close');
  more.addEventListener('click', function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  });
  popupClose.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = 'visible';
  });
  document.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) {
      overlay.style.display = 'none';
      more.classList.remove('more-splash');
      document.body.style.overflow = 'visible';
    }
  }); // Модальное окно 'Узнать подробнее' на каждую кнопку

  var descripBtn = document.querySelectorAll('.description-btn');
  descripBtn.forEach(function (descripBtn) {
    descripBtn.addEventListener('click', function () {
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    });
  }); // for (let i = 0; i < descripBtn.length; i++) {
  //     descripBtn[i].addEventListener('click', function() {
  //         overlay.style.display = 'block';
  //         this.classList.add('more-splash');
  //         document.body.style.overflow = 'hidden';
  //     });
  // }
}

module.exports = modal;