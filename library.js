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

let button = document.querySelector('#submitButton');

button.addEventListener('click', () => {
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let pages = document.getElementById('pages');

    addBook(title.value, author.value, pages.value);

    title.value = author.value = pages.value = '';

});