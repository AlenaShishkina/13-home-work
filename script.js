function Animal(cat, cow) {
    this.cat = cat;
    this.cow = cow;
}

function Mammals() {
    this.milk = function () {
        return this.cat === "female"
    };
}

function Racook() {
    this.canSteal = true
}

const animal = new Animal("female", "run");
const dogs = new Mammals();
const rakoon = new Racook();

dogs.__proto__ = animal;
rakoon.__proto__ =  dogs;


console.log(rakoon.milk())