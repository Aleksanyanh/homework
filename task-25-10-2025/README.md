🏫 Task: “PicsartAcademy” Class Design
🎯 Goal
Design a system of classes that models the structure of a training center called PicsartAcademy.
 You must use composition (a class containing other class instances) to represent rooms, library, and kitchen.

🧱 (1) Main Class — PicsartAcademy

Requirements:
    1. Create a class called PicsartAcademy.
    2. It should contain several types of rooms and facilities:
        - A classroom (for students to attend lessons).
        - A library (where books are stored).
        - A kitchen (for  staff to prepare meals).
    3. Each of these must be separate classes, created and then composed inside PicsartAcademy.
    4. The PicsartAcademy class must:
        - Have a property for each facility (this.classroom, this.library, this.kitchen).
        - Have a method like showInfo() that prints what facilities the academy has.


🏫 (2) Class — Classroom

Requirements:
    1. Create a class called Classroom.
    2. It represents a teaching room where students have lessons.
    3. It must have:
        - A property for the room number.
        - A property for the list of students (array).
        - A method addStudent(name) that adds a student to the list.
        - A method listStudents() that prints all student names.


📚 (3) Class — Library

Requirements:
    1. Create a class called Library.
    2. It represents the academy’s library where books are kept.
    3. It must have:
        - A property books — an array of book objects.
        - A method addBook(title, author) that adds a new book.
        - A method listBooks() that prints all available books.


🍳 (4) Class — Kitchen

Requirements:
    1. Create a class called Kitchen.
    2. It represents the working area for staff (employees).
    3. It must have:
        - A property staff — an array of worker names.
        - A method addWorker(name) that adds a worker.
        - A method listWorkers() that prints all worker names.


🧩 (5) Composition

Inside your PicsartAcademy class constructor:
    1. Create new instances of each sub-class:
        - this.classroom = new Classroom(101);
        - this.library = new Library();
        - this.kitchen = new Kitchen();
    2. Use them like:
        - academy.classroom.addStudent("Alice");
        - academy.library.addBook("Clean Code", "Robert C. Martin");
        - academy.kitchen.addWorker("Chef Bob");
        - academy.showInfo();
    3. Expected Output Example: Picsart Academy has:
        - 1 classroom with students: Alice, James
        - Library with books: Clean Code, JavaScript: The Good Parts
        - Kitchen with workers: Chef Bob, Mike

