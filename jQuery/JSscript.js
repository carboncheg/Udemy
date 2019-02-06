'use strict';

let btn = document.querySelectorAll('button'),
    img = document.querySelectorAll('img');

btn[1].addEventListener('click', function() {
    this.classList.add('hide');
});

btn[2].addEventListener('dblclick', () => {
    btn[1].style.visibility = 'visible';
    btn[1].classList.remove('hide');
});

btn[0].addEventListener('mouseenter', () => {
    img[0].style.visibility = 'hidden';
    // setTimeout(() => {
    //     img[0].style.transitionDuration = '1000';
    //     img[0].style.opasity = '.5';
    // }, 1000);
});

// img[i].addEventListener('mouseleave', () => {
//     function useOddImg() {
//         for(let i = 0; i < img.length; i = i + 2);
//         img[i].classList.add('hide');
//     }
//     useOddImg();
// });

img.forEach(function(elem) {
        console.log(elem)
});