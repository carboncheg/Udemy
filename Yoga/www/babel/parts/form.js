"use strict";

require("core-js/modules/es6.promise");

function form() {
  // Форма
  var message = {
    loading: "Загрузка...",
    sucsess: "Спасибо! Скоро мы с Вами свяжемся!",
    failure: "Что-то пошло не так..."
  };
  var form = document.querySelector('.main-form'),
      formDown = document.querySelector('#form'),
      input = form.getElementsByTagName('input'),
      statusMessage = document.createElement('div');
  statusMessage.classList.add('status');

  function sendForm(elem) {
    elem.addEventListener('submit', function (event) {
      event.preventDefault();
      elem.appendChild(statusMessage);
      var formData = new FormData(elem);

      function postData() {
        return new Promise(function (resolve, reject) {
          var request = new XMLHttpRequest();
          request.open('POST', 'server.php');
          request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // request.setRequestHeader('Content-Type', 'application/json; charset=utf-8'); // для отправки json-формата

          request.onreadystatechange = function () {
            // request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4 && request.status == 200) {
              resolve();
            } else {
              reject();
            }
          };

          request.send(formData); // Вот тут другое название переменной (непонятный коммент от препода)
          // для отправки json-формата
          // let obj = {};
          // formData.forEach(function(value, key) {
          //     obj[key] = value;
          // });
          // let json = JSON.stringify(obj);
          // request.send(json);
        });
      }

      function clearInput() {
        for (var i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      }

      postData(formData).then(function () {
        return statusMessage.innerHTML = message.loading;
      }).then(function () {
        return statusMessage.innerHTML = message.sucsess;
      }).catch(function () {
        return statusMessage.innerHTML = message.failure;
      }).then(clearInput);
    });
  }

  sendForm(form);
  sendForm(formDown);
}

module.exports = form;