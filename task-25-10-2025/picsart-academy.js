class Classroom {

    constructor(number) {
        this.roomNumber = number;
        this.students = [];
    }

    addStudent(name) {
        this.students.push({ name });
    }

    listStudents() {
        this.students.forEach((student, i) => {
            console.log(`${i + 1}) ${student.name}`);
        });
    }
}

class Library {
    books = [];

    addBook(title, author) {
        this.books.push({ title, author });
    }

    listBooks() {
        this.books.forEach((book, i) => {
            console.log(`${i + 1}) ${book.title} | ${book.author}`);
        });
    }
}

class Kitchen {
    staff = [];

    addWorker(name) {
        this.staff.push({ name });
    }

    listWorkers() {
        this.staff.forEach((worker, i) => {
            console.log(`${i + 1}) ${worker.name}`);
        });
    }
}

class PicsartAcademy {
    classroom = new Classroom(101);
    library = new Library();
    kitchen = new Kitchen();

    showInfo() {
        console.log(`-----------STUDENTS OF CLASSROOM NUMBER ${this.classroom.roomNumber}-----------`);

        this.classroom.listStudents();

        console.log('-----------BOOKS-----------');

        this.library.listBooks();

        console.log('-----------WORKERS-----------');

        this.kitchen.listWorkers();
    }

}

const academy = new PicsartAcademy();

academy.classroom.addStudent("Alice");
academy.library.addBook("Clean Code", "Robert C. Martin");
academy.kitchen.addWorker("Chef Bob");
academy.showInfo();