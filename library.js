const myLibrary = [];

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
const newBook = document.getElementById("newBook");
//new book form
const form = document.getElementById("form");
//submit button on new book form
const submitButton = document.getElementById("submitButton");
//hide new book form by default 
form.style.display = "none";

//on click, set from display to flex to make it visible + set flex attributes
newBook.addEventListener("click", () => {
    form.style.display = "flex";
    form.setAttribute("style", "flex-direction: column; flex-wrap: wrap;");

});

//when submit button is clicked on new book form, take values from form and create new book object with them
submitButton.addEventListener("click", () => {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');

    addBook(title.value, author.value, pages.value);
    //reset the values to null
    title.value = author.value = pages.value = null;
    //hide the new book form
    form.style.display = "none";
    //call populateCards() to add the new card to the page
    populateCards();

});

//close button on new book form
const close = document.getElementById("close");
//when close button is clicked on new book form, hide the new book form and remove the values from it
close.addEventListener("click", () => {
    form.style.display = "none";
    title.value = author.value = pages.value = null;
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
    for(property of Object.values(obj)) {
        let para = document.createElement("p");
        para.innerText = property;
        card.appendChild(para);
    }
    //card.innerText = obj.title + " " + obj.author + " " + obj.pages;

}
