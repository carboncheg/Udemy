'use strict';

let money = +prompt('Ваш бюджет на месяц?', '50000');
let time = +prompt('Введите дату в фотмате YYYY-MM-DD', '2018-11-25');
let appData = {
    monthBudget: money,
    timeData: time,
    requireExpenses: expenses,
    optionalExpenses: '',
    additionalIncome: income,
    savings: false
}

var income = [];

let itemOfExpenses = prompt('Введите обязательную статью расходов в этом месяце', '');
let costOfExpenses = prompt('Во сколько обойдётся?');

var expenses = {
    itemOfExpenses: costOfExpenses
}

alert(appData.monthBudget/30);