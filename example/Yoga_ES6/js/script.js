window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    // Скрыть tabContent

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    // Показать tabContent

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    // Назначение обработчика событий при клике на каждый из табов

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });


    // Таймер
    
    // Устанавливаем дедлайн
    let deadline = '2019-01-31';

    // Рассчитываем оставшееся время
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/1000/60/60));
            // hours = Math.floor((t/1000/60/60) % 24),
            // days = Math.floor((t/1000/60/60/24));

            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
    }

    // Преващаем статичную вёрстку в динамичную
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
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


    // Модальное окно 'Узнать больше'

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        popupClose = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    popupClose.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = 'visible';
    });

    document.addEventListener('keydown', function(e) {
        if (e.keyCode == 27) {
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = 'visible';    
        }
    });

    // Модальное окно 'Узнать подробнее' на каждую кнопку

    let descripBtn = document.querySelectorAll('.description-btn');

    descripBtn.forEach(function(descripBtn) {
        descripBtn.addEventListener('click', function() {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    });

    // for (let i = 0; i < descripBtn.length; i++) {
    //     descripBtn[i].addEventListener('click', function() {
    //         overlay.style.display = 'block';
    //         this.classList.add('more-splash');
    //         document.body.style.overflow = 'hidden';
    //     });
    // }


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


    // Слайдер 

    let slideIndex = 1,  // Параметр текущего слайда
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        // for (let i = 0; i < slides.length; i++) {  /* вариант с использованием цикла */
        //     slides[i].style.display = 'none';
        // }
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {   /* увеличивает параметр SlideIndex */
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', () => {
        plusSlides(-1);
    });

    next.addEventListener('click', () => {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', (event) => {
        for( let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && 
                event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });


    // Калькулятор

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.textContent = 0;

    persons.addEventListener('input', function() {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if(restDays.value == '') {
            totalValue.textContent = 0;
        }
        else {
            totalValue.textContent = total;
        }
    });

    restDays.addEventListener('input', function() {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if(persons.value == '') {
            totalValue.textContent = 0;
        }
        else {
            totalValue.textContent = total;
        }
    });

    place.addEventListener('input', function() {
        if (persons.value == '' || restDays.value == '') {
            totalValue.textContent = 0;
        }
        else {
            let a = total;
            totalValue.textContent = a * this.options[this.selectedIndex].value;
        }
    });

});