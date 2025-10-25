//  3) Student Class — Task Requirements
// Task: Create a class called Student that stores a student’s name and grades.

// Requirements: 
// 1. The class must have a constructor that takes one parameter name.
// 2. It should have an empty array property grades.
// 3. Add a method addGrade(grade) to add a grade to the array.
// 4. Add a method average() that returns the average of all grades (or 0 if there are no grades).
// 5. Create one student, add a few grades, and print the average grade.

class Student {
    constructor(name) {
        this.name = name;
        this.grades = [];
    }

    addGrade(grade) {
        if (grade < 0 || grade > 100) {
            throw new Error(`${grade} should be between 0 and 100.`)
        }

        this.grades.push(grade);
    }

    average() {
        if (!this.grades.length) {
            return 0;
        }

        const sum = this.grades.reduce((a, b) => a + b);

        return Math.round(sum / this.grades.length);
    }
}

const bob = new Student('Bob');
bob.addGrade(10);
bob.addGrade(50);
bob.addGrade(80);
const averageGrade = bob.average();

console.log(`The average grade is ${averageGrade}`);




