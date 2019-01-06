/* Бомж не привязан к определённому месту, живёт и функционирует во всём мире.
    НО! Если мы поместим его в дом и дадим работу, он получит контекст вызова */

/* 1) Просто вызов функции.
    Результатом будет window (в ES5) или undefined (в ES6 c 'use strict') */

function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}
showThis(2, 5);
showThis(3, 7);


/* 2) Метод объекта - this равен самому объекту.
    НО! Функция shout() теряет контекст, потому что она вызывается уже не как метод объекта, 
    а как функция внутри функции. */

let obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
        function shout() {
            console.log(this);
        }
        shout();
    }
};
obj.sum();


/* 3) Конструктор (new) - this будет равен новому созданному объекту 
    (Контекстом вызова конструктора является только что созданный объект) */

function Foo () {  
    console.log(this instanceof Foo); // => true
    this.property = 'Default Value';
    }
    // Constructor invocation
    var fooInstance = new Foo();  
    console.log(fooInstance.property); // => 'Default Value'


/* 4) Указание конкретного контекста - call, apply, bind (намеренное назначение) */ 

let user = { 
    name: 'John'
};
function sayName(surname, surname2) {
    console.log(this);
    console.log(this.name + ' ' + surname + ' or ' + surname2);
}

console.log(sayName.call(user, 'Smith', 'Travolta'));
console.log(sayName.apply(user, ['Snow','Lennon']));

function count(number) {
    return this * number;
}
let double = count.bind(2);
console.log(double(333));
console.log(double(62165));
console.log(double(-2));
console.log(double(0));
console.log(double('2'));
console.log(double('Hi'));




let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);   // <button><h1>Click!</h1></button>
    this.style.color = 'red';
    function showThis() {
        console.log(this);
    }
    showThis();
});