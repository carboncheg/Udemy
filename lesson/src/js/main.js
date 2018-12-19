'use strict';

// Получить кнопку "Начать расчёт"

let startBtn = document.getElementById('start');


// Получить блоки справа

let budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0];


// Получить блоки поля input

let expensesItem = document.getElementsByClassName('expenses-item');


// Получить кнопки "Утвердить" и "Рассчитать" через Tag

let expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2];


// Получить поле ввода необязательных расходов

let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');


/* Получить оставшиеся поля:
статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день */

let incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

// Начать рассчёт

let money, time;
    
startBtn.addEventListener('click', function() {
    time = prompt('Введите дату в формате YYYY-MM-DD', '2018-11-25');
    money = +prompt('Ваш бюджет на месяц', '50000');
    
    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц', '50000');
    }
    appData.budgetValue = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

// Вводим обязательные расходы

expensesBtn.addEventListener('click', function() {
    let sum = 0;
    
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50) {
            console.log('Exp Done!');
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log('Bad result of Exp');
            i--;   // i = i - 1 
        }
    }
    expensesValue.textContent = sum;
});

// Вводим необязательные расходы

optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';

        // if ((typeof(opt)) === 'string' 
        //     && (typeof(opt)) != null && opt != '' && opt.length < 50) {
        //     console.log('OptExp Done!');
        //     appData.optionalExpenses[i] = opt;
        //     console.log(appData.optionalExpenses);
        // }
    }
});

// Рассчитываем дневной бюджет и уровень дохода

countBtn.addEventListener('click', function() {

    if (appData.budgetValue != undefined) {
        appData.moneyPerDay = ((appData.budgetValue /* - expensesValue */) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if(appData.moneyPerDay < 667) {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if(appData.moneyPerDay > 667 && appData.moneyPerDay < 1666) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if(appData.moneyPerDay >= 1666) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Unexpected error';
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }
});

// Вводим статьи возможного дохода

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

// Есть ли накопления

checkSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

    let appData = {
        budgetValue: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };
        // chooseExpenses: function() {
            
        // },
        // chooseOptExpenses: function() {
        //     for (let i = 1; i <= 3; i++) {
        //         let opt = prompt('Статья необязятельных расходов', 'Кино');
        
        //         if ((typeof(opt)) === 'string' 
        //             && (typeof(opt)) != null 
        //             && opt != '' && opt.length < 50) {
        //             console.log('OptExp Done!');
        //             appData.optionalExpenses[i] = opt;
        //             console.log(appData.optionalExpenses);
        //         }
        //     }
        // },
        // detectDayBudget: function() {
            
        //     alert('Дневной бюджет: ' + appData.moneyPerDay + ' рублей');
        // },
        // detectLevel: function() {
            
        // },
        // checkSavings: function() {
        //     if(appData.savings == true) {
        //         let save = +prompt('Сумма ваших накоплений', '36024'),
        //             percent = +prompt('Под какой процент?', '15');
        
        //         appData.monthIncome = save/100/12*percent;
        //         alert('Доход в месяц с вашего депозита: ' + appData.monthIncome + ' рублей');
        //     }
        // },
    //     chooseIncome: function() {
    //         let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
    //         if(typeof(items) != 'string' || items == null || items == ''); {
    //             items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
    //         }
    //         appData.income = items.split(', ');
    //         appData.income.push(prompt('Может что-то еще?', ''));
    //         appData.income.sort();
    //         appData.income.forEach(function(itemmassive, i) {
    //             alert('Способы доп. заработка: ' + (i + 1) + ' - ' + itemmassive);
    //         });
    //     }
    // };
    
    // for(let key in appData) {
    //     console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
    // }
    
    
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
    
    
    // appData.moneyPerDay = (appData.budgetValue / 30).toFixed(2);
    
    // alert('Ежедневный бюджет: ' + appData.moneyPerDay + ' рублей');
    