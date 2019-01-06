let box = document.querySelector('.box');

let clientWidth = box.clientWidth,
    clientHeight = box.clientHeight;

console.log('clientWidth: ' + clientWidth);
console.log('clientHeight: ' + clientHeight);

let offsetWidth = box.offsetWidth,
    offsetHeight = box.offsetHeight;

console.log('offsetWidth: ' + offsetWidth);
console.log('offsetHeight: ' + offsetHeight);

let scrollWidth = box.scrollWidth,
    scrollHeight = box.scrollHeight;

console.log('scrollWidth: ' + scrollWidth);
 
let clientTop = box.clientTop,
    clientLeft = box.clientLeft;

console.log('clientTop: ' + clientTop);
console.log('clientLeft: ' + clientLeft);

let offsetTop = box.offsetTop,
    offsetLeft = box.offsetLeft;

console.log('offsetTop: ' + offsetTop);
console.log('offsetLeft: ' + offsetLeft);

let scrollTop = box.scrollTop;

console.log('scrollTop: ' + scrollTop);


// Раскрываем всю высоту box'а

// let btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     box.style.height = box.scrollHeight + 'px';
// });


// Показываем сколько пикселей прокрутили сверху

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(box.scrollTop);
});


// Возвращаем к началу документа

// let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    box.scrollTop = 0;
});

/* scrollTop & scrollLeft - изменяемые */


console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().x);
console.log(box.getBoundingClientRect().right);
console.log(box.getBoundingClientRect().width);


console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);


// Смотреть на сайтах с большой высотой и шириной, которые больше размеров экрана
console.log(document.documentElement.scrollTop);
console.log(document.documentElement.scrollLeft);

// Ввести в консоли браузера
document.documentElement.scrollTop = 0;
document.documentElement.scrollLeft = 0;

scrollBy(50, 200); // Переход по координатам относительно предыдущих координат
scrollTo(50, 200); // Переход к координатам в абсолютном значении