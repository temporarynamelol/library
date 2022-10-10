let myLibrary = [];

// Book object constructor
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

//Adds book object to library array
function addBook(title, author, pages) {
    let book = new Book(title, author, pages);
    myLibrary.push(book);
}

let title = prompt("Enter a title");
let author = prompt("Enter a author");
let pages = prompt("Enter a pages");

addBook(title, author, pages);