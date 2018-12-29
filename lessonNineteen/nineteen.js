let body = document.querySelector('body');
    body.style.backgroundColor = 'dimgray';



let btn = document.querySelector('.btn'),
    box = document.querySelector('.box');

function myAnimation() {
    let pos = 0;

    let timerId = setInterval(frame, 10);
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


// function myAnima() {
//     let x = 0,
//         y = 0;

//     let timerId = setInterval(frame, 7);
//     function frame() {
//         if (y == 300) {
//             x++;
//             box.style.left = x + 'px';

//         } else {
//             y++;
//             box.style.top = y + 'px';

//             if (x == 300) {
//                 y--;
//                 box.style.top = y + 'px';
//             }
//         }
//     }
// }

// btn.addEventListener('click', myAnima);

// let timerId = setTimeout(sayHello, 1000);
// clearTimeout(timerId);

// function sayHello() {
//     alert('Hello!');
// }


// let timerId = setInterval(sayHello, 1000);
// clearInterval(timerId);

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

// // let btnBlock = document.querySelector('.btn-block'),
// //     btns = document.getElementsByTagName('button');

// btnBlock.addEventListener('click', function(event) {
//     if (event.target && event.target.classList.contains('first')) {
//         console.log('Done!');
//     }
// });

// // let btnBlock = document.querySelector('.btn-block'),
// //     btns = document.getElementsByTagName('button');

// btnBlock.addEventListener('click', function(event) {
//     if (event.target && event.target.matches('button.first')) {
//         console.log('Done!');
//     }
// });



// let btn = document.createElement('button');
// btnBlock.appendChild(btn);
// btn.textContent = '2';
// btnBlock.insertBefore(btn, btnBlock.children[1]);


// let btn = document.createElement('button'),
//     wrap = document.querySelector('.wrapper'),
//     box = document.querySelector('.box');
//     div = document.getElementsByTagName('div');
// // document.body.appendChild(btn);     // Если есть insertBefore, appendChild необязателен
// btn.textContent = '2';
// wrap.appendChild(btn);

// // let div = document.getElementsByTagName('*');
// // console.log(div[7]);

// let text = document.createTextNode('Ola, Espanola!');
// wrap.insertBefore(text, box);

// btnBlock.removeChild(btns[6]);

// btnBlock.replaceChild(btns[5], btns[4]);

// box.innerHTML = '<h6>Hello World</h6>';
//     box.style.color = 'mediumturquoise';

// let btnBl2 = btnBlock.cloneNode(true);
//     btnBl2.querySelectorAll('button')[1].textContent = 'Yo!';
//     btnBl2.style.fontSize = '25px';
//     wrap.parentNode.insertBefore(btnBl2, wrap.nextSibling);


// setTimeout(function() {
//     document.body.removeChild(btnBlock);
// }, 1000);

// setTimeout(function() {
//     btn = document.createElement('button');
//     btn.innerHTML = '10';

//     btnBl2.insertBefore(btn, btns[2]);
// }, 2000);

// setTimeout(function(){
//     btn = document.createElement('button');
//     btn.innerHTML = '11';

//     btnBl2.replaceChild(btn, btns[7]);
// }, 3000);


// let divText = document.createElement('div');
//     document.body.insertBefore(divText, btns[0]);
//     divText.style.border = '5px solid slateblue';
//     divText.style.font = '20px Verdana';

// let textNode = prompt('Введите сообщение: ','');

//     divText.appendChild(document.createTextNode(textNode));


// Управление табами

let btnBlock = document.querySelector('.btn-block'),
    btns = document.querySelectorAll('button'),
    square = document.querySelectorAll('.square');

function hideSquare(a) {
    for (let i = a; i < square.length; i++) {
        square[i].classList.remove('show');
        square[i].classList.add('hide');
    }
}
hideSquare(1);

function showSquare(b) {
    if (square[b].classList.contains('hide')) {
        square[b].classList.remove('hide');
        square[b].classList.add('show');
    }
}

btnBlock.addEventListener('click', function(event) {
    let target = event.target;
    if (target && target.classList.contains('btns')) {
        for (let i = 0; i <= btns.length; i++) {
            if (target == btns[i+1]) {
                hideSquare(0);
                showSquare(i);
                break;
            }
        }
    }
});