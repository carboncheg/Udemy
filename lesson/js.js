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

let pos = 1, n = 2
let arr = [1, 'хлеб', 3.14, 'JS', '$']
// arr.pop();
// arr.push(6623, 'bubble', '1235862');
// arr.shift();
// arr.unshift(123, 'grass', '5586525');
console.log(arr.splice(pos, n));

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let arr = [1, 'хлеб', 3.14, 'JS', '$'];
// arr.forEach(function(item, i, mass) {
//     console.log(i + ' : ' + item + "(массив: " + mass + ')');
// });