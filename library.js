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
let form = document.getElementById("form");
let submitButton = document.getElementById("submitButton");
form.style.display = "none";

//on click, query form div from html, add three new inputs for title, author and pages + new submit button
newBook.addEventListener("click", () => {
    form.style.display = "flex";
    form.setAttribute("style", "flex-direction: column; flex-wrap: wrap;");

});

submitButton.addEventListener("click", () => {
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let pages = document.getElementById('pages');

    addBook(title.value, author.value, pages.value);
    //reset the values to null
    title.value = author.value = pages.value = null;
    //remove the new book form
    form.style.display = "none";
    //call populateCards() to add the new card to the page
    populateCards();

})

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





