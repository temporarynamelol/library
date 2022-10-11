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

//Main book container
const bookstore = document.getElementById("bookStore");

function populateCards () {
    for(obj of myLibrary) {
        console.log(obj);
        const card = document.createElement("div");
        bookstore.appendChild(card);
        card.innerText = obj.title + " " + obj.author + " " + obj.pages;
    }
}

let button = document.querySelector('#submitButton');

button.addEventListener('click', () => {
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let pages = document.getElementById('pages');

    addBook(title.value, author.value, pages.value);

    title.value = author.value = pages.value = '';

    populateCards();

});



