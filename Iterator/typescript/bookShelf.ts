import Book from './book';

export default class BookShelf {
  books: Array<Book>; 
  last: number;

  constructor(last: number) {
    this.books = [];
    this.last = last;
  }

  getBookAt(index: number) : Book {
    return this.books[index];
  }

  appendBook(book: Book) {
    this.books.push(book);
  }

  getLength(): number {
    return this.books.length;
  }
}
