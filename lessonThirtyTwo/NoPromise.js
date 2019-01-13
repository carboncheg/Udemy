let drink = 0;

function shoot(arrow, headshot, fail) {
    console.log('Вы сделали выстрел...');

    setTimeout( () => {
        Math.random() > .5 ? headshot({}) : fail('Вы промахнулись');
    }, 1000)
};

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

function lose() {
    console.log('Вы проиграли!');
}

shoot({},
        function(mark) {
            console.log('Вы попали в цель!');
            win(mark, buyWhiskey, giveMoney);
        },
        function(miss) {
            console.error(miss);
            lose();
        }
    );