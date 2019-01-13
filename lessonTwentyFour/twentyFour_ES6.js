// Интерполяция

let name = 'Serge',
    age = 30,
    email = 'mail@mail.com';

document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес: ${email}.`);



// let и const

/* При использовании var в цикле, эта переменная создаётся одна на весь цикл, 
она не создаётся заново в каждой итерации. Поэтому получаем в результате три раза 10. */

function makeArray() {
    var items = [];

    for (var i = 1; i < 10; i++) {
        var item = function() {
            console.log(i);
        };
        items.push(item);
    }
    return items;
}

var arr = makeArray();

arr[1]();
arr[8]();
arr[3]();


/* let создаётся в каждой итерации цикла. Поэтому получаем 2, 9, 4 */

function makeArray() {
    var items = [];

    for (let i = 1; i < 10; i++) {
        var item = function() {
            console.log(i);
        };
        items.push(item);
    }
    return items;
}

var arr = makeArray();

arr[1]();
arr[8]();
arr[3]();



// Стрелочные функции

/* Стрелочная функция анонимна, ей невозможно задать имя. 
Её можно поместить лишь в какую-либо переменную.
При необходимости нет возможности управлять обработчиками событий и 
нет возможности запускать эту функцию внутри себя, т.е. сделать рекурсию.
Своего контекста вызова стрелочная функция не имеет */

let fun = () => {
    console.log(this);
};

fun();

/* Результатом кода ниже мы получим сам объект obj, 
потому что у стрелочной функции нет контекста вызова 
и она берёт его у своего родителя sayNumber.
И так как у sayNumber конетекст вызова сам объект obj, 
то и результатом функции мы получим obj. 
Стрелочные функции чаще всего используются в setInterval, setTimeout и AJAX */

let obj = {
    number: 5,
    sayNumber: function() {
        let say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();


let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let show = () => {
        console.log(this);
    };
    show();
}); 



// Параметры по умолчанию

/* ES5 */

function calcOrDouble(number, basis) {
    basis = basis || 2;
    console.log(number * basis);
}
calcOrDouble(12, 10);
calcOrDouble(333);

/* ES6 */

function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}
calcOrDouble(12, 10);
calcOrDouble(333);



// Классы
class Person {
    constructor(name) {
      this.name = name;
    }
  
    sayName() {
        console.log(`Person ${this.name} said his name`);
    }

    favouriteBook() {
        console.log(`${this.name}'s favourite book is Holy Bible`);
    }
}
  
const john = new Person('John'),
    isaak = new Person('Isaak');

john.sayName();
isaak.sayName();

john.favouriteBook();
isaak.favouriteBook();

class Rectangle {
    constructor(height, width = 20) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
    calcPerimeter() {
        return (this.height + this.width) * 2;
    }
}

const square = new Rectangle(20);

console.log(`Площадь квадрата равна ${square.calcArea()}.`);
console.log(`Периметр квадрата равен ${square.calcPerimeter()}.`);



// Spread-операторы

let videoHostings = ['Youtube', 'Vimeo', 'Rutube'],
    blogs = ['TechCrunch', 'LiveJournal', 'Blogger'],
    internet = [...videoHostings, ...blogs, 'Vk', 'Facebook'];

console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
let numbers = [11, 2, 5];

log(...numbers);


let array = [1, 2, 3];

console.log(...array);


function it(...args) {
    console.log(args);
}
it('Big Data', 'Machine Learning', 'Data Science');