'use strict';

let money = +prompt('Ваш бюджет на месяц?', '50000'),
    time = +prompt('Введите дату в фотмате YYYY-MM-DD', '2018-11-25');
let appData = {
    monthBudget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

let itemOfExpenses1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    costOfExpenses1 = prompt('Во сколько обойдётся?', ''),
    itemOfExpenses2 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    costOfExpenses2 = prompt('Во сколько обойдётся?', '');

appData.expenses.itemOfExpenses1 = costOfExpenses1;
appData.expenses.itemOfExpenses2 = costOfExpenses2;

alert(appData.monthBudget/30);