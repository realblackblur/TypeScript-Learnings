// Project: Library Book class
class Book {
  title: string;
  readonly isbn: number;
  private checkedOut: boolean;

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

const Mindset = new Book("Mindset", 111, false);
const AtomicHabits = new Book("Atomic Habits", 131, true);

Mindset.checkOut();
AtomicHabits.checkOut();

Mindset.returnBook();
AtomicHabits.returnBook();

console.log(Mindset.isCheckedOut());
console.log(AtomicHabits.isCheckedOut());

// Output:
// Mindset checked out.
// Already checked out.
// Mindset not checked out.
// Atomic Habits not checked out.
// false
// false
