'use strict';

// Получаем доступ ко всех необходимым элементам страницы

let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv')[0],
    comment = document.querySelector('#prompt');

// Создаём новый элемент

let menuItemLi = document.createElement('li');

// Меняем местами 3 и 2 пункты

menu.insertBefore(menuItem[2], menuItem[1]);

// Добавляем пятый пункт в меню

menuItemLi.classList.add('menu-item');
menuItemLi.textContent = 'Пятый пункт';
menu.appendChild(menuItemLi);

// Заменяем фон

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

// Заменяем заголовок

title.textContent = 'Мы продаём только подлинную технику Apple';

// Удаляем рекламу

adv.remove();
// document.body.removeChild(adv);

// Спрашиваем пользователя об отношении к технике Apple и выводим на страницу

let feedback  = prompt('Как вы относитесь к технике Apple?', '');
comment.textContent = feedback;