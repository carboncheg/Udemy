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

});