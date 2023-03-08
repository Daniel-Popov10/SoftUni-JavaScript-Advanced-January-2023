function addSpeciesAndToString(cls) {
    cls.prototype.species = "Human";
    cls.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    };
}


class Person {
    constructor(name) {
        this.name = name;
    }

    toString() {
        return `My name is ${this.name}.`;
    }
}

addSpeciesAndToString(Person);

const john = new Person("John");
const gary = new Person("Gary");
console.log(gary.toSpeciesString());
console.log(john.toSpeciesString());