/* 'use strict';

let money = num3('Ваш бюджет на месяц?', '50000'),
    time = num3('Введите дату в фотмате YYYY-MM-DD', '2018-11-25');
let appData = {
    monthBudget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let itemOfExpenses1 = num3('Введите обязательную статью расходов в этом месяце', ''),
    costOfExpenses1 = num3('Во сколько обойдётся?'),
    itemOfExpenses2 = num3('Введите обязательную статью расходов в этом месяце', ''),
    costOfExpenses2 = num3('Во сколько обойдётся?');

appData.expenses.itemOfExpenses1 = costOfExpenses1;
appData.expenses.itemOfExpenses2 = costOfExpenses2;

alert(appData.monthBudget/30); */


let num = 50,
    num2 = 100;

let num3 = +prompt('Введите число: ', '0');

/* if (num3 > 50 && num3 > 100) {
    alert(num3 + ' больше 50 и 100')
}
else if (num3 > 50 && num3 < 100) {
    alert(num3 + ' больше 50, но меньше 100')
}
else if (num3 < 50 && num3 < 100) {
    alert(num3 + ' меньше 50 и 100')
}
else {
    alert('Введите число')
}; */


// let num = 50;
// (num == 50) ? alert('Yes!') : alert('No!');


switch (num3) {
    case num3 > 50 && num3 > 100:
        alert(num3 + ' больше 50 и 100');
        break;
    case num3 > 50 && num3 < 100:
        alert(num3 + ' больше 50, но меньше 100');
        break;
    case num3 < 50 && num3 < 100:
        alert(num3 + ' меньше 50 и 100');
        break;
    default:
        alert('Введите число');
        break;
};



