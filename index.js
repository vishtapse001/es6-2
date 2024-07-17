function animal(noOfLegs, vegetarian) {
    return {
        noOfLegs: noOfLegs,
        vegetarian: vegetarian,
        eat: function() {
            return "eating...";
        },
        greet: function() {
            return `Hi, I have ${this.noOfLegs} legs.`;
        }
    };
}

// Example usage:
let a1 = animal(4, true);
console.log(a1.eat()); // Outputs: eating...
console.log(a1.greet()); // Outputs: Hi, I have 4 legs.


function AnimalCF(noOfLegs, vegetarian) {
    this.noOfLegs = noOfLegs;
    this.vegetarian = vegetarian;
    this.eat = function() {
        return "eating...";
    };
    this.greet = function() {
        return `Hi, I have ${this.noOfLegs} legs.`;
    };
}

// Example usage:
let animalCF = new AnimalCF(4, true);
console.log(animalCF.eat()); // Outputs: eating...
console.log(animalCF.greet()); // Outputs: Hi, I have 4 legs.


class AnimalES6 {
    constructor(noOfLegs, vegetarian) {
        this.noOfLegs = noOfLegs;
        this.vegetarian = vegetarian;
    }

    eat() {
        return "eating...";
    }

    greet() {
        return `Hi, I have ${this.noOfLegs} legs.`;
    }
}

// Example usage:
let animalES6 = new AnimalES6(4, true);
console.log(animalES6.eat()); // Outputs: eating...
console.log(animalES6.greet()); // Outputs: Hi, I have 4 legs.
