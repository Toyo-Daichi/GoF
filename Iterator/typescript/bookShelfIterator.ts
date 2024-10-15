import Book from './book';
import BookShelf from './bookShelf';

export class BookShelfIterator implements Iterator<Book> {
  bookShelf: BookShelf;
  index: number;

  constructor(bookShelf: BookShelf) {
    this.bookShelf = bookShelf;
    this.index = 0;
  }

  hasNext(): boolean {
    if (this.index < this.bookShelf.getLength()) {
      return true;
    } else {
      return false;
    }

  next() : Book {
    if (!this.hasNext()) {
      throw new Error('No such element');
    }
    const book = this.bookShelf.getBookAt(this.index);
    this.index++;
    return book;
  }
}
