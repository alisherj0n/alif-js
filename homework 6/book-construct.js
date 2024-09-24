function Book(title, author, year, genre) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
}

const book = new Book('Harry Potter', 'Manizha Qurbonova', 2003, 'Fantasy');
const book2 = new Book('Friends', 'John Doe', 2001, 'Drama');

console.log(book.title);
console.log(book.author);
console.log(book.year);
console.log(book.genre);

console.log(book2.title);
console.log(book2.author);
console.log(book2.year);
console.log(book2.genre);
