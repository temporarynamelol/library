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

let newBook = document.getElementById("newBook");

newBook.addEventListener("click", () => {
    let form = document.getElementById("form");

    let title = document.createElement("input");
    title.setAttribute("id", "title");

    let author = document.createElement("input");
    author.setAttribute("id", "author");

    let pages = document.createElement("input");
    pages.setAttribute("id", "pages");

    let submitButton = document.createElement("button");
    submitButton.setAttribute("id", "submitButton");

    form.appendChild(title);
    form.appendChild(author);
    form.appendChild(pages);
    form.appendChild(submitButton);

    submitButton.addEventListener('click', () => {
        let title = document.getElementById('title');
        let author = document.getElementById('author');
        let pages = document.getElementById('pages');
    
        addBook(title.value, author.value, pages.value);
    
        title.value = author.value = pages.value = '';
        
        form.innerHTML = null;

        populateCards();
    
    });


});

//Main book container
const bookstore = document.getElementById("bookStore");

function populateCards () {

    const obj = myLibrary[myLibrary.length -1];

    const card = document.createElement("div");
    card.classList.add("card");
    //create card and add it to book store
    bookstore.appendChild(card);
    //set Book object properties as text on card object
    card.innerText = obj.title + " " + obj.author + " " + obj.pages;

}

//let submitButton = document.querySelector('#submitButton');





