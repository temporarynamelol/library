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

//add book button
let newBook = document.getElementById("newBook");

//on click, query form div from html, add three new inputs for title, author and pages + new submit button
newBook.addEventListener("click", () => {
    let body = document.querySelector("body");

    let form = document.createElement("div");
    form.setAttribute("id", "form");

    let title = document.createElement("input");
    title.setAttribute("id", "title");

    let author = document.createElement("input");
    author.setAttribute("id", "author");

    let pages = document.createElement("input");
    pages.setAttribute("id", "pages");

    let submitButton = document.createElement("button");
    submitButton.setAttribute("id", "submitButton");
    
    body.appendChild(form);

    form.appendChild(title);
    form.appendChild(author);
    form.appendChild(pages);
    form.appendChild(submitButton);
    //when submit button is clicked, call the addBook() function with the new values
    submitButton.addEventListener('click', () => {
        let title = document.getElementById('title');
        let author = document.getElementById('author');
        let pages = document.getElementById('pages');
    
        addBook(title.value, author.value, pages.value);
        //reset the values to null
        title.value = author.value = pages.value = null;
        //remove the new book form
        body.removeChild(form);
        //call populateCards() to add the new card to the page
        populateCards();
    
    });


});

//Main book container
const bookstore = document.getElementById("bookStore");

function populateCards () {
    //grab the most recently added object from myLibrary[] array
    const obj = myLibrary[myLibrary.length -1];

    const card = document.createElement("div");
    card.classList.add("card");
    //create card and add it to book store
    bookstore.appendChild(card);
    //set Book object properties as text on card object
    card.innerText = obj.title + " " + obj.author + " " + obj.pages;

}

//let submitButton = document.querySelector('#submitButton');





