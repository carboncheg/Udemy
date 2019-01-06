function User(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log('Hello, ' + this.name + '. Your ID - ' + this.id);
    };
}

// Вывести в консоли alex.hello() и т.п.

let ivan = new User('Ivan', 25, 123456),
    alex = new User('Alex', 23, 456789);

console.log(ivan);
console.log(alex);

User.prototype.exit = function(name) {
    console.log('Пользователь ' + this.name + ' вышел');
};

alex.exit();

User.prototype.enter = function(name) {
    console.log('Пользователь ' + this.name + ' зашёл');
};

ivan.enter();

User.prototype.years = function(age) {

    let year;

    if (this.age == 21) {
        year = ' год';
        console.log('Пользователю ' + this.name + ' ' + this.age + year);
    }
    else if (this.age >= 22 && this.age <= 24) {
        year = ' года';
        console.log('Пользователю ' + this.name + ' ' + this.age + year);
    }
    else if (this.age == 20 || this.age >= 25 && this.age <= 30) {
        year = ' лет';
        console.log('Пользователю ' + this.name + ' ' + this.age + year);
    }
    else {
        console.log('Возраст пользователя ' + this.name + ' вне интервала 20-30 лет');
    }
};

alex.years();
ivan.years();