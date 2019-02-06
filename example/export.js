export let one = 1;

let two = 2;

export {two};

// export {one, two};

// export {one as once, two as twice};

export class User {
    constructor(name) {
        this.name = name;
    }
}

export function sayHi() {
    console.log('Hi!');
}

// export function() {
//     console.log('Error');
// }