
let inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd');

    inputRub.addEventListener('input', () => {

        function getData() {
            return new Promise(function(resolve, reject) {
                let request = new XMLHttpRequest();
        
                /* Методы XMLHttpRequest */
                // request.open(method, url, async, login, pass);
                request.open('GET', 'thirtyOne.json');
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                request.send();
                // request.send(body);

                request.addEventListener('load', function() {
                    if (request.readyState === 4 && request.status == 200) {
                            resolve(this.response);
                        }
                        else {
                            reject();
                        }
                }); 
            });
            
        }

        getData()
        .then(response => {
            let data = JSON.parse(response);
            inputUsd.value = (inputRub.value / data.usd).toFixed(2);
        })
        .catch (() => inputUsd.value = 'Что-то пошло не так =(');

    });