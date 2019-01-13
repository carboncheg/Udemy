let drink = 0;

function shoot(arrow) {
    console.log('Вы сделали выстрел...');
    // Создаём Promise
    let promise = new Promise(function(resolve, reject) {
        setTimeout( () => {
            Math.random() > .5 ? resolve({}) : reject(miss());
        }, 1000);
    });

    return promise;
}
    // Используем Promise
function win() {
    console.log('Вы победили!');
    (drink == 1) ? buyWhiskey() : giveMoney();
}

    function buyWhiskey() {
        console.log('Вам купили виски');
    }

    function giveMoney () {
        console.log('Вам заплатили!');
    }
function miss() {
    console.log('Вы промахнулись!');
}
function lose() {
    console.error('Вы проиграли!');
}

shoot({})
        .then(mark => console.log('Вы попали в цель!'))
        .then(win)
        .catch(lose);
