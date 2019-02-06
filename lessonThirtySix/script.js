(function() {
    let app = {
        data: 45
    };
    console.log(app);
}());

// function User (name, age) {
//     this.name = name;
//     let userAge = age;

//     this.getAge = function() {   // Геттер
//         return userAge;
//     };

//     this.setAge = function(age) {   // Сеттер
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('Недопустимое значение');
//         }
//     };

//     this.say = function() {
//         console.log(`Имя пользователя: ${this.name}, возраст: ${this.userAge}`);
//     };
// }

// let user = new User('Serge', 29);
// console.log(user.name);
// console.log(user.userAge);
// user.say();
// console.log(user.getAge());
// user.setAge('25');
// user.setAge(25);
// console.log(user.getAge());


// user.name = 'Duke';
// user.age = '30';
// user.say();


let number = 1;
                // Анонимная самовызывающаяся функция
(function() {    // Function Expression (Функциональное выражение) - 
    let number = 2;    //  может быть безымянной
    console.log(number);

    return console.log(number + 3);
}());

// function getNumber() {    // Function Declaration (Объявление функции) - 
//     let number = 2;   // обязательно именована
//     console.log(number);

//     return console.log(number + 3);
// }
// getNumber();

console.log(number);


// Объектный интерфейс

// let user = (function() {
//     let private = function() {   // Инкапсуляция
//         console.log('I am private');
//     };
//     return {
//         sayHello: function() {
//             console.log('Hello');
//         }
//     };
// }());

// console.log(user);
// console.log(user.sayHello());



let user = (function() {
    let private = function() {   // Инкапсуляция
        console.log('I am private');
    };
    let sayHello = function() {
        console.log('Hello');
    };
    return {
        sayHello: sayHello
    };
}());

console.log(user);
console.log(user.sayHello());