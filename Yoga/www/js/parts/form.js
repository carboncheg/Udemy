function form() {
    // Форма

    let message = {
        loading: "Загрузка...",
        sucsess: "Спасибо! Скоро мы с Вами свяжемся!",
        failure: "Что-то пошло не так..."
    };
        
    let form = document.querySelector('.main-form'),
        formDown = document.querySelector('#form'),
        input = form.getElementsByTagName ('input'),
        statusMessage = document.createElement('div');
        
        statusMessage.classList.add('status');
        
    function sendForm(elem){
        
        elem.addEventListener('submit', function(event) {
            event.preventDefault();
            elem.appendChild(statusMessage);
        
            let formData = new FormData(elem);
        
        function postData() {
            return new Promise(function (resolve, reject) {
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                // request.setRequestHeader('Content-Type', 'application/json; charset=utf-8'); // для отправки json-формата
                request.onreadystatechange = function () {
                // request.addEventListener('readystatechange', function() {
                    if(request.readyState < 4) {
                        resolve();
                    } 
                    else if (request.readyState === 4 && request.status == 200) {
                        resolve();
                    } 
                    else {
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
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }
        postData (formData)
            .then (() => statusMessage.innerHTML = message.loading)
            .then (() => statusMessage.innerHTML = message.sucsess)
            .catch (() => statusMessage.innerHTML = message.failure)
            .then (clearInput);
        });
    }
    sendForm(form);
    sendForm(formDown);
}

module.exports = form;