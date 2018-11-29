/* 'use strict';

let money = prompt('Ваш бюджет на месяц?', '50000'),
    time = prompt('Введите дату в фотмате YYYY-MM-DD', '2018-11-25');
let appData = {
    monthBudget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let itemOfExpenses1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    costOfExpenses1 = prompt('Во сколько обойдётся?'),
    itemOfExpenses2 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    costOfExpenses2 = prompt('Во сколько обойдётся?');

appData.expenses.itemOfExpenses1 = costOfExpenses1;
appData.expenses.itemOfExpenses2 = costOfExpenses2;

alert(appData.monthBudget/30); */


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


for (let i = 3; i < 12; i++) {
    if (i%3 == 1 && i%3 == 2) {
        continue;
    }
    console.log(i);
}


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