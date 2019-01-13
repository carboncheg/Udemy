'use strict';

let inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    /* Методы XMLHttpRequest */

    // request.open(method, url, async, login, pass);
    request.open('GET', 'thirtyOne.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    // request.send(body);
    request.send();

    /* Свойства XMLHttpRequest */

    // status
    // statusText
    // responseText или response
    // readyState

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = (inputRub.value / data.usd).toFixed(2);
        }
        // else if (isNaN(inputRub.value) === true) {
        //     inputUsd.value = 'Введите число';
        // }
        else {
            inputUsd.value = 'Что-то пошло не так =(';
        }
    });
});