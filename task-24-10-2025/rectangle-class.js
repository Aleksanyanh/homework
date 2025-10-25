//  1) Rectangle Class — Task Requirements
// Task: Create a class called Rectangle that represents a rectangle.

// Requirements:
// 1. The class must have a constructor with two parameters: width and height.
// 2. Add a method area() that returns the rectangle’s area.
// 3. Add a method perimeter() that returns the rectangle’s perimeter.
// 4. Create one rectangle object and print its area and perimeter in the console.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return (2 * this.width) + (2 * this.height);
    }
}

const rectangle = new Rectangle(10, 20);
const area = rectangle.area();
const perimeter = rectangle.perimeter();

console.log(`The rectangle area is ${area} and the perimeter is ${perimeter}`);




