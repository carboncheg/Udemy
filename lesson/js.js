'use strict';

/* let num = 50,
    num2 = 100;

let number = +prompt('Введите число: ', '0'); */

/* if (number > 50 && number > 100) {
    alert(number + ' больше 50 и 100')
}
else if (number > 50 && number < 100) {
    alert(number + ' больше 50, но меньше 100')
}
else if (number < 50 && number < 100) {
    alert(number + ' мень ше 50 и 100')
}
else {
    alert('Введите число')
}; */


/* let num = 50;
(num == 50) ? alert('Yes!') : alert('No!'); */


/* switch (number) {
    case number > 50 && number > 100:
        alert(number + ' больше 50 и 100');
        break;
    case number > 50 && number < 100:
        alert(number + ' больше 50, но меньше 100');
        break;
    case number < 50 && number < 100:
        alert(number + ' меньше 50 и 100');
        break;
    default:
        alert('Введите число');
        break;
}; */


// let num3 = +prompt('Введите число: ', '0');
 
// switch (true) {
//     case num3 > 50 && num3 > 100:
//         alert(num3 + ' больше 50 и 100');
//         break;
//     case num3 > 50 && num3 < 100:
//         alert(num3 + ' больше 50, но меньше 100');
//         break;
//     case num3 < 50 && num3 < 100:
//         alert(num3 + ' меньше 50 и 100');
//         break;
//     default:
//         alert('Введите число');
//         break;
// };



// let num = 50;
// /* while (num < 55) {
//     console.log(num);
//     ++num;
// } */


// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);


// for (let i = 3; i < 12; i++) {
//     if (i%3 == 1 && i%3 == 2) {
//         continue;
//     }
//     console.log(i);
// }


// let x = 13;
// var y = x++;
// console.log(y); // 13

// let x = 13;
// var y = ++x;
// console.log(y); // 14


/* let y = 1; let x = y = 2; alert(x);
 */


/* 1234 && 5678
// 5678
NaN && null
// NaN
1234 || 5678
// 1234
NaN || null
// null */


// L E S S O N    F U N C T I O N

// function showText(text) {
//     let num = 40;
//     console.log(num);
//     console.log(text);
// }
// let num = 10;
// showText('Привет, Мир!');
// console.log(num);

// // Function Declaration

// function calc(a, b, c, d) {
//     return ((a + b) * c % d);
// }

// console.log(calc.length);
// console.log(calc(1, 2, 3, 4));
// console.log(calc(1645534, 354135412, 35454, 353468434));

// Function Expression

// let calc = function(a, b, c, d) {
//     return ((a + b) * c % d);
// };

// console.log(calc(1, 2, 3, 4));
// console.log(calc(1645534, 354135412, 35454, 353468434));


// Новый стандарт ES6

// let calc = (a, b, c, d) => (a + b) * c % d;

// console.log(calc(1, 2, 3, 4));
// console.log(calc(1645534, 354135412, 35454, 353468434));



// function returnVar() {
//     let num = 50;
//     return num;
// }

// let anotherNum = returnVar();
// console.log(anotherNum);


// // Свойства - это вспомогательные значения

// let str = 'Индексация изменённых файлов';
// console.log(str.length);

// let numb = 14.5;
// console.log(Math.round(numb));


// // 
// let val = '26.78px';
// console.log(parseInt(val));
// console.log(parseFloat(val));


// // Методы - это вспомогательные функции

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(numb.toFixed(3));


// // 
// let a = ["b", "c", 1, 2, 3, 4];
// console.log(a.length);
// console.log(a[1]);


// function first() {
//     setTimeout(function() {
//         console.log(1);
//     }, 1000);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();


// // callback

// function learnJS(lang, callback) {
//     console.log('Я учу ' + lang);
//     callback();
// }

// function done() {
//     console.log('Я прошёл 3-й урок!');
// }

// learnJS('JavaScript', done);



// Objects

// let vegetableColors = {
//     carrot: 'orange',
//     cucumber: 'green',
//     tomato: 'red' 
// };

// console.log(vegetableColors.tomato);

// vegetableColors.onion = 'violet';

// delete vegetableColors.cucumber;

// console.log(vegetableColors);

// for (let key in vegetableColors) {
//     console.log(key + ' has an ' + vegetableColors[key] + ' color');
// }


// Arrays

// let arr = [1, 'хлеб', 3.14, 'JS', '$'];
// arr[10] = 10;
// console.log(arr);
// console.log(arr.length);

// let arr = [1, 'хлеб', 3.14, 'JS', '$']
// arr.pop();
// arr.push(6623, 'bubble', '1235862');
// arr.shift();
// arr.unshift(123, 'grass', '5586525');

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let arr = [1, 'хлеб', 3.14, 'JS', '$'];
// arr.forEach(function(item, i, mass) {
//     console.log(i + ' : ' + item + "(массив: " + mass + ')');
// });


// let mass = [23, 165, 52, 2565, 125, 99466]
// let massive = mass.splice(2);
// console.log(mass);


// let mass = [23, 165, 52, 2565, 125, 99466]
// for (let key of mass) {
//      console.log(key);
// }


   // Создание массива из списка

// let ans = prompt(''),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);


   // Создание списка из массива

// let arr = ['adfsv', 'efwR', 'SGVwr', 'KIULUJHY', 'WQERWETYTR'],
//     i = arr.join(' | ');

// console.log(i);


   // Сортировка массива по алфавиту

// let arr = ['adfsv', 'efwR', 'SGVwr', 'KIULUJHY', 'WQERWETYTR'],
//    i = arr.sort();

// console.log(i);


   //Сортировка чисел по возрастанию

// let arr = [350, 35, 1567, 9],
//    i = arr.sort(compareNum);

// function compareNum(a,b) {
//     return a-b;
// }

// console.log(i);


    //  ООП

// let car = {
//     color: 'white',
//     type: 'sedan'
// };

// let Mersedes = {
//     type: 'sedan'
// };

// Mersedes.__proto__ = car;

// console.log(Mersedes);
// console.log(Mersedes.color);

// var name = 'John Smith';
// function showName() {
//     console.log(this.name);
// }

// var user = {
//     name: 'Ellen Simons',  
//     showName: function() {  
//         console.log(this.name);  
//     }
// }

// showName();        // John Smith
// window.showName(); // John Smith
// user.showName();   // Ellen Simons


// Получение элементов со страницы

let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName("circle"),
    heart = document.querySelectorAll('.heart'),
    firstHeart = document.querySelector('.heart'),
    nameHeart = document.getElementsByName('heart'),
    wrapper = document.querySelector('.wrapper');


// console.log(box);
// console.log(btn);
// console.log(btn[3]);
// console.log(circle);
// console.log(circle[2]);
// console.log(heart);
// console.log(heart[1]);
// console.log(firstHeart);
// console.log(heart[2]);

box.style.backgroundColor = 'purple';
box.style.color = '#fff';
box.style.margin = '20px';
btn[2].style.borderRadius = '50%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// цикл вместо повторного кода

for (let i = 0; i < heart.length; i++) {
    heart[i].style.backgroundColor = 'grey';
}

// перебор вместо повторного кода

heart.forEach(function(item, i, hearts) {
    item.style.backgroundColor = 'lightgreen';
});

let div = document.createElement('div'),
    text = document.createTextNode('Этот текст был создан в JS');

div.classList.add('black');

// document.body.appendChild(div);
// wrapper.appendChild(div);

div.innerHTML = 'Hello World!';
box.innerHTML = '<h2>Привет, Мир!</h2>';
circle[1].textContent = 'Алоха, Мир!';


document.body.insertBefore(div, btn[3]);
document.body.removeChild(btn[3]);
wrapper.removeChild(heart[0]);

document.body.replaceChild(circle[1], btn[1]);


console.log(div);
console.log(text);