'use strict';

class User {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.human = true;
        }
    hello() {
        console.log(`Hello, ${this.name}. Your ID - ${this.id}`);
    }

    exit() {
        console.log(`Пользователь ${this.name} вышел`);
    }

    enter() {
        console.log(`Пользователь ${this.name} зашёл`);
    }

    years() {

        let year;

        if (this.age == 21) {
            year = ' год';
            console.log(`Пользователю ${this.name} ${ this.age} year`);
        }
        else if (this.age >= 22 && this.age <= 24) {
            year = ' года';
            console.log(`Пользователю ${this.name} ${this.age} year`);
        }
        else if (this.age == 20 || this.age >= 25 && this.age <= 30) {
            year = ' лет';
            console.log(`Пользователю ${this.name} ${this.age} year`);
        }
        else {
            console.log(`Возраст пользователя ${this.name} вне интервала 20-30 лет`);
        }
    }
}

let ivan = new User('Ivan', 25, 123456),
    alex = new User('Alex', 23, 456789);

console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();
alex.exit();
ivan.enter();
alex.years();
ivan.years();