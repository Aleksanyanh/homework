//  5) Animal → Dog Inheritance — Task Requirements
// Task: Create two classes: Animal and Dog, where Dog inherits from Animal.

// Requirements:
// 1. The Animal class should have a constructor that takes one parameter name.
// 2. It should have a method speak() that prints <name> makes a sound.
// 3. The Dog class should extend Animal and override the speak() method to print <name> barks.
// 4. Create an instance of Dog and call its speak() method.

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log(`${this.name} barks`);
    }
}

const dog = new Dog('Bulldog');

dog.speak();






