 1) Rectangle Class — Task Requirements
Task: Create a class called Rectangle that represents a rectangle.

Requirements:
1. The class must have a constructor with two parameters: width and height.
2. Add a method area() that returns the rectangle’s area.
3. Add a method perimeter() that returns the rectangle’s perimeter.
4. Create one rectangle object and print its area and perimeter in the console.


 2) BankAccount Class — Task Requirements
Task: Create a class called BankAccount to simulate a simple bank account.

Requirements:
1. The class must have a constructor with two properties: owner (string) and balance (number, default 0).
2. Add a method deposit(amount) that increases the balance.
3. Add a method withdraw(amount) that decreases the balance — only if there’s enough money. Otherwise, print    "Insufficient funds".
4. Create one account, make a deposit and a withdrawal, and print the final balance.


 3) Student Class — Task Requirements
Task: Create a class called Student that stores a student’s name and grades.

Requirements: 
1. The class must have a constructor that takes one parameter name.
2. It should have an empty array property grades.
3. Add a method addGrade(grade) to add a grade to the array.
4. Add a method average() that returns the average of all grades (or 0 if there are no grades).
5. Create one student, add a few grades, and print the average grade.


 4) MathHelper Class — Task Requirements
Task: Create a utility class called MathHelper that contains a static method.

Requirements:
1. The class should not require creating an object.
2. Add a static method square(n) that returns the square of a number.
3. Test the method directly by calling MathHelper.square(4) and print the result.


 5) Animal → Dog Inheritance — Task Requirements
Task: Create two classes: Animal and Dog, where Dog inherits from Animal.

Requirements:
1. The Animal class should have a constructor that takes one parameter name.
2. It should have a method speak() that prints <name> makes a sound.
3. The Dog class should extend Animal and override the speak() method to print <name> barks.
4. Create an instance of Dog and call its speak() method.