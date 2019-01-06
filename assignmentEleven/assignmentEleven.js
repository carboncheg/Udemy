// 'use strict';

// let age = document.getElementById('age');
// function showUser(surname, name) {
// 	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// }
// showUser.apply(age, ['Сидоров', 'Пётр']);


let age = +prompt('Введите возраст: ', '29');
function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this);
}
showUser.apply(age, ['Сидоров', 'Пётр']);