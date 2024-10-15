export default class Book {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getBookName(): string {
    return this.name;
  }
}
