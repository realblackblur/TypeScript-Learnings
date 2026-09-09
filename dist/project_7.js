"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Project: Book => E-Book
class Book {
    title;
    isbn;
    checkedOut;
    constructor(title, isbn, checkedOut) {
        this.title = title;
        this.isbn = isbn;
        this.checkedOut = checkedOut;
    }
    checkOut() {
        if (this.checkedOut) {
            console.log("Already checked out.");
            return;
        }
        this.checkedOut = true;
        console.log(`${this.title} checked out.`);
    }
    returnBook() {
        if (!this.checkedOut) {
            console.log("Already been returned.");
            return;
        }
        this.checkedOut = false;
        console.log(`${this.title} has been returned.`);
    }
    isCheckedOut() {
        return this.checkedOut;
    }
}
class EBook extends Book {
    fileSize;
    constructor(title, isbn, checkedOut, fileSize) {
        super(title, isbn, checkedOut); // calls Book's constructor first — required before using `this`
        this.fileSize = fileSize;
    }
    download() {
        if (this.checkedOut) { // works — protected is visible inside a subclass
            console.log("Already checked out, can't download.");
            return;
        }
        console.log(`Downloading, ${this.fileSize}MB`);
    }
}
const Mindset = new Book("Mindset", 111, false);
const AtomicHabits = new EBook("Atomic Habits", 131, false, 100);
AtomicHabits.download();
Mindset.checkOut();
AtomicHabits.checkOut();
Mindset.returnBook();
AtomicHabits.download();
console.log(Mindset.isCheckedOut());
console.log(AtomicHabits.isCheckedOut());
//Abstract Classes
class Shape {
}
class Rectangle extends Shape {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
const area51 = new Rectangle(10, 3);
//# sourceMappingURL=project_7.js.map