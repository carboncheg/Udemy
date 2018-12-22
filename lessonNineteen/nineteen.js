let btn = document.querySelector('.btn'),
    box = document.querySelector('.box');

function myAnimation() {
    let pos = 0;

    let timerId = setInterval(frame, 20);
    function frame() {
        if (pos == 300) {
            clearInterval(timerId);
        } else {
            pos++;
            box.style.top = pos + 'px';
            box.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);


// let timerId = setTimeout(sayHello, 1000);
// clearTimeout(timerId);

// function sayHello() {
//     alert('Hello!');
// }


// let timerId = setInterval(sayHello, 1000);
// clearTimeout(timerId);

// function sayHello() {
//     console.log('Hello!');
// }



// let timerId = setTimeout(function log() {
//     console.log('Hello!');
//     setTimeout(log, 1000);
// });


// Делегирование событий

// let btnBlock = document.querySelector('.btn-block'),
//     btns = document.getElementsByTagName('button');

// btnBlock.addEventListener('click', function(event) {
//     if (event.target && event.target.tagName == 'BUTTON') {
//         console.log('Done!');
//     }
// });

// let btnBlock = document.querySelector('.btn-block'),
//     btns = document.getElementsByTagName('button');

// btnBlock.addEventListener('click', function(event) {
//     if (event.target && event.target.classList.contains('first')) {
//         console.log('Done!');
//     }
// });


let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event) {
    if (event.target && event.target.matches('button.first')) {
        console.log('Done!');
    }
});