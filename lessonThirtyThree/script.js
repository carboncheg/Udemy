'use script'

window.addEventListener('DOMContentLoaded', function() {

    let checkbox = document.querySelector('#checkbox'),
        change = document.querySelector('button'),
        form = document.querySelector('form');

    if(localStorage.getItem('isChecked') === 'true') {
        checkbox.checked = true;
    }
    
    if(localStorage.getItem('bg') === 'changed') {
        form.style.backgroundColor = 'olive';
    }

    checkbox.addEventListener('click', function() {
        localStorage.setItem('isChecked', true);
    });

    change.addEventListener('click', function() {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'olive';
    });


    let person = {
        name: 'Alex',
        age: 22,
        device: ['iPhone', 'MacBook', 'iPad']
    };

    let serializedPerson = JSON.stringify(person);
    localStorage.setItem('person', serializedPerson);

    console.log(JSON.parse(localStorage.getItem('person')));

});