//call this function on load so that the new book form is hidden straight away
displayForm();
//main array that will hold all book objects
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

//this function toggles the visibility of the new book form and set display attributes
function displayForm() {
    //new book form
    const form = document.getElementById("form");
    //hide new book form by default 
    form.style.display = "none";
    //add book button
    const addBookButton = document.getElementById("newBook"); 
    //on click of add book button, make for visible with correct display attributes
    addBookButton.addEventListener("click", () => {
        form.style.display = "flex";
        form.setAttribute("style", "flex-direction: column;");
    
    });
    //call the submitForm function to listen for click on submit button while visible
    submitForm();
    //call the closeForm function to listen for click on close button while visible
    closeForm();
}

//this function listens for clicks on the submit button and then passes the form values as arguments to addBook 
function submitForm() {
    const submitButton = document.getElementById("submitButton");
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
}

//this function listens for clicks on the close button and then hides the new book form, resetting the values to null
function closeForm() {
    //close button on new book form
    const close = document.getElementById("close");
    //when close button is clicked on new book form, hide the new book form and remove the values from it
    close.addEventListener("click", () => {
        form.style.display = "none";
        title.value = author.value = pages.value = null;
    });
}

//Main book container
const bookstore = document.getElementById("bookStore");

let counter = 0;
function populateCards () {
    //Add to counter for unique number each time populateCards() called
    ++counter;
    //grab the most recently added object from myLibrary[] array
    const obj = myLibrary[myLibrary.length -1];

    //creates a new card div with a uniquely numbered id
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("id", `card${counter}`);

    //Labes for each value of the card
    const labels = ["Title", "Author", "Pages"];
    //itterator for labels
    let i = 0;
    //set Book object properties as text on card object
    for(property of Object.values(obj)) {
        let para = document.createElement("p");
        para.innerText = property;
        let header = document.createElement("h4");
        header.innerText = labels[i];
        card.appendChild(header);
        card.appendChild(para);
        ++i;
    }
    //create remove button with uniquely numbered id
    let removeButton = document.createElement("button");
    removeButton.setAttribute("class", "remove");
    removeButton.setAttribute("id", `${counter}`);
    removeButton.innerText = "Remove";
    //add remove button to card
    card.appendChild(removeButton);
    //create card and add it to book store
    bookstore.appendChild(card);
    //call removeCard to listen for clicks on removeButton
    removeCard(removeButton);

}

//this function listens for clicks on the removeButton, and then removes the card that the button is on
function removeCard(removeButton) {
    //on click, find the card with the same unique number in it's ID as the button
    removeButton.addEventListener("click", () => {
        let link = removeButton.getAttribute("id");
        let removed = document.getElementById(`card${link}`);
        //remove the identified card
        removed.remove();
    });
}