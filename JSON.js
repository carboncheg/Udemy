let options = {
    height: 1024,
    widht: 1920,
    background: 'green',
    font: {
        size: '16px',
        color: '#fff',
        family: 'Helvetica'
    }
};

let json = JSON.stringify(options);

console.log(json);


console.log(JSON.parse(json));