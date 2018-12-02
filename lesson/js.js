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

function showText(text) {
    let num = 40;
    console.log(num);
    console.log(text);
}
let num = 10;
showText('Привет, Мир!');
console.log(num);

// Function Declaration

function calc(a, b, c, d) {
    return ((a + b) * c % d);
}

console.log(calc.length);
console.log(calc(1, 2, 3, 4));
console.log(calc(1645534, 354135412, 35454, 353468434));

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



function returnVar() {
    let num = 50;
    return num;
}

let anotherNum = returnVar();
console.log(anotherNum);


// Свойства - это вспомогательные значения

let str = 'Индексация изменённых файлов';
console.log(str.length);

let numb = 14.5;
console.log(Math.round(numb));


// 
let val = '26.78px';
console.log(parseInt(val));
console.log(parseFloat(val));


// Методы - это вспомогательные функции

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(numb.toFixed(3));


// 
let a = ["b", "c", 1, 2, 3, 4];
console.log(a.length);
console.log(a[1]);