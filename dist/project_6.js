// Project: Library Book class
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
const Mindset = new Book("Mindset", 111, false);
const AtomicHabits = new Book("Atomic Habits", 131, true);
Mindset.checkOut();
AtomicHabits.checkOut();
Mindset.returnBook();
AtomicHabits.returnBook();
console.log(Mindset.isCheckedOut());
console.log(AtomicHabits.isCheckedOut());
export {};
// Output:
// Mindset checked out.
// Already checked out.
// Mindset not checked out.
// Atomic Habits not checked out.
// false
// false
//# sourceMappingURL=project_6.js.map