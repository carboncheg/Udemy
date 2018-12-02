'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц', '50000');
    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц', '50000');
    }
    time = prompt('Введите дату в формате YYYY-MM-DD', '2018-11-25');
}
start();

let appData = {
    monthBudget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

// let i = 0;
// while (i < 2) {
//     i++;
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдётся?', '');

//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//         && a != '' && b != '' && a.length < 50) {
//         console.log('Done!');
//         appData.expenses[a] = b;
//     } else {
//       console.log('Bad result');
//       i--;
//         }
//     }
// }

// let i = 0;
// do {
//     i++;
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдётся?', '');

//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//         && a != '' && b != '' && a.length < 50) {
//         console.log('Done!');
//         appData.expenses[a] = b;
//     } else {
//         console.log('Bad result');
//          i--;
//         }
//     }
// } while (i < 2);


function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Обязательная статья расходов в этом месяце', 'Квартплата'),
            b = prompt('Во сколько обойдётся?', '8000');
    
        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50) {
            console.log('Exp Done!');
            appData.expenses[a] = b;
        } else {
            console.log('Bad result of Exp');
            i--;   // i = i - 1 
        }
    }
}
chooseExpenses();

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt('Статья необязятельных расходов', 'Кино');

        if ((typeof(questionOptExpenses)) === 'string' 
            && (typeof(questionOptExpenses)) != null 
            && questionOptExpenses != '' && questionOptExpenses.length < 50) {
            console.log('OptExp Done!');
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    }
}
chooseOptExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.monthBudget / 30).toFixed(2);
    alert('Дневной бюджет: ' + appData.moneyPerDay + ' рублей');
}
detectDayBudget();

// appData.moneyPerDay = (appData.monthBudget / 30).toFixed(2);

// alert('Ежедневный бюджет: ' + appData.moneyPerDay + ' рублей');

function detectLevel() {
    if(appData.moneyPerDay < 667) {
        console.log('Минимальный уровень достатка');
    } else if(appData.moneyPerDay > 667 && appData.moneyPerDay < 1666) {
        console.log('Средний уровень достатка');
    } else if(appData.moneyPerDay >= 1666) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Unexpected error');
    }
}
detectLevel();

function checkSavings() {
    if(appData.savings == true) {
        let save = +prompt('Сумма ваших накоплений', '36024'),
            percent = +prompt('Под какой процент?', '15');

        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome + ' рублей');
    }
}
checkSavings();

