'use strict';

let money = +prompt('Ваш бюджет на месяц?', '50000'),
    time = prompt('Введите дату в фотмате YYYY-MM-DD', '2018-11-25');

let appData = {
    monthBudget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
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
//         for (let i = 0; i < 2; i--) {
//             let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//                 b = prompt('Во сколько обойдётся?', '');
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
//         for (let i = 0; i < 2; i--) {
//             let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//                 b = prompt('Во сколько обойдётся?', '');
//         }
//     }
// } while (i < 2);


for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдётся?', '');

    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
        console.log('Done!');
        appData.expenses[a] = b;
    } else {
        console.log('Bad result');
        i--;
    }
}

appData.moneyPerDay = appData.monthBudget / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay + ' рублей');

if(appData.moneyPerDay < 667) {
    console.log('Минимальный уровень достатка');
} else if(appData.moneyPerDay < 1666) {
    console.log('Средний уровень достатка');
} else if(appData.moneyPerDay >= 1666) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Unexpected error');
};


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