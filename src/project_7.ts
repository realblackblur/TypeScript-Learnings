// Project: Book => E-Book
class Book {
  title: string;
  readonly isbn: number;
  protected checkedOut: boolean;

  constructor(title: string, isbn: number, checkedOut: boolean) {
    this.title = title;
    this.isbn = isbn;
    this.checkedOut = checkedOut;
  }

  public checkOut(): void{
    if (this.checkedOut) {
      console.log("Already checked out.");
      return;
    }
    this.checkedOut = true;
    console.log(`${this.title} checked out.`)
  }

  public returnBook(): void {
    if (!this.checkedOut) {
      console.log("Already been returned.")
      return;
    }
    this.checkedOut = false;
    console.log(`${this.title} has been returned.`)
  }

  public isCheckedOut (): boolean {
    return this.checkedOut;
  }
}

class EBook extends Book {
  fileSize: number;

  constructor(title: string, isbn: number, checkedOut: boolean, fileSize: number) {
    super(title, isbn, checkedOut);   // calls Book's constructor first — required before using `this`
    this.fileSize = fileSize;
  }

  download(): void {
    if (this.checkedOut) {           // works — protected is visible inside a subclass
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
abstract class Shape {
  abstract area(): number;
}

class Rectangle extends Shape {
  constructor (private width: number, private height: number) {
    super();
  }
  area(): number {
    return this.width * this.height;
  }
}

const area51 = new Rectangle(10, 3);
