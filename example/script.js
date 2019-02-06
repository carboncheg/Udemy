class Country {
    constructor(name, area) {
        this.name = name;
        this.area = area;
    }
    getData() {
        console.log(this.name + ' имеет площадь ' + this.area + ' кв. км.');
    }
}
let russia = new Country('Россия', '17 125 191'),
    usa = new Country('США', '9 834 000'),
    china = new Country('Китай', '9 597 000');

// russia.getData();
// usa.getData();
// china.getData();

// console.log(russia.area);
// console.log(usa.name);


class Subject extends Country {
    constructor(name, area, subjectName, subjectCapital) {
        super(name, area);
        this.subjectName = subjectName;
        this.subjectCapital = subjectCapital;
    }
    getMessage() {
        console.log(this.name + ' имеет площадь ' + this.area + 
        ' кв. км. В нём есть субъект административно-территориального деления ' 
        + this.subjectName + ' с центром ' + this.subjectCapital);
    }
    getSubjectCapital() {
        console.log(this.subjectCapital);
    }
}
function obj() {
    let perm = new Subject('Россия', '17 125 191', 'Пермский край', 'Пермь'),
        texas = new Subject('США', '9 834 000', 'Техас', 'Остин'),
        guandong = new Subject('Китай', '9 597 000', 'Гуандун', 'Гуаньчжоу');

    perm.getMessage();
    texas.getMessage();
    guandong.getMessage();

    perm.getSubjectCapital();
}
obj();