const bookSection = document.querySelector(".myBooks");
const button = document.querySelector(".button");
const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const inputPages = document.getElementById("pages");
const error = document.querySelector("#pages + span.error");
const readCheck = document.getElementById("check");
const legendaryCheck = document.getElementById("legendary");
const totalcount = document.querySelector(".total-books")
const totalReadcount = document.querySelector(".total-readbooks")

const form = document.querySelector("form");

let deleteButton;

function Book(title, autor, pages, isRead, legendary) {
    this.title = title;
    this.author = autor;
    this.pages = pages;
    this.isRead = isRead;
    this.legendary = legendary;
}

let booksTotal = 0;
let readbooks = 0;


let myLibrary = [];

inputPages.addEventListener("input", () => {
    if (inputPages.validity.valid) {
        error.textContent = "";
        error.className = "error";
    }else {
        showError();
    }
})
form.addEventListener("submit", (event) => {
    // if the email field is valid, we let the form submit
    if (!inputPages.validity.valid) {
      // If it isn't, we display an appropriate error message
    showError();
      // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
    }
});
function showError() {
    if (inputPages.validity.valueMissing) {
      // If the field is empty,
      // display the following error message.
    error.textContent = "You need to enter an email address.";
    } else if (!inputPages.validity.valid) {
      // If the field doesn't contain an email address,
      // display the following error message.
    error.textContent = "Entered value is not valid";
    } else if (inputPages.validity.tooShort) {
      // If the data is too short,
      // display the following error message.
    error.textContent = `Email should be at least ${inputPages.min} characters; you entered ${email.value}.`;
    }

    // Set the styling appropriately
    error.className = "error active";
}


button.addEventListener("click", addBookToLibrary);



function addBookToLibrary() {
    // Set the inputs and initials values
const inputTitleV = inputTitle.value;
const inputAuthorV = inputAuthor.value;
const inputPagesV = inputPages.value;
let thisBookRead = false;
let legend = false;


    if (inputTitleV && inputAuthorV && inputPagesV) { // check if the inputs are not empty

        let read = "";

        if (readCheck.checked) { // check if isRead is true
            readbooks++;
            read = "This book is read";
            thisBookRead = true;
        }
        else {
            read = "Not read Yet";
            thisBookRead = false;
        }
        
        if (legendaryCheck.checked) { // check if legendary is true
            legend = true;
        }
            // Create a new book
        const newBook = new Book(inputTitleV,inputAuthorV, inputPagesV, thisBookRead, legend);
        myLibrary.push(newBook);

        const bookContainer = document.createElement("DIV");
        const book = document.createElement("DIV");
        const bookName = document.createElement("DIV");
        const bookNametxt = document.createElement("P");
        const bookInfo = document.createElement("DIV");
        const deleteBook = document.createElement("BUTTON");
        const buttonDiv = document.createElement("DIV");


        booksTotal++;
        totalcount.textContent = booksTotal;
        totalReadcount.textContent = readbooks;
        deleteBook.textContent = "X";

                // For loop to iterate in the array
    for (let i = 0; i < myLibrary.length; i++) {
            bookInfo.innerHTML = ` 
            <p>Title: ${myLibrary[i].title}</p>
            <p>Author: ${myLibrary[i].author}</p>
            <p>Pages: ${myLibrary[i].pages}</p>
            <br>
            <p>${read}</p>
            `;
            bookNametxt.textContent = myLibrary[i].title;

            bookContainer.setAttribute("id", `book-${i}`)//set the same data-/id for both container
            deleteBook.setAttribute("data-book", i);    //and "x" button, to identify when remove
    }


        bookContainer.classList.add("book-container");
        book.classList.add("book");
        bookName.classList.add("book-name");
        deleteBook.classList.add("del");
        bookInfo.classList.add("info");
        buttonDiv.classList.add("button-div");

        deleteBook.setAttribute("title", "Remove book")

        if (legend) {   // add class legend when legend is cheked
            book.classList.add("legend");
        }
        bookInfo.appendChild(buttonDiv);
        buttonDiv.appendChild(deleteBook);
        bookName.appendChild(bookNametxt);
        book.appendChild(bookName);
        bookContainer.appendChild(book);
        bookContainer.appendChild(bookInfo);
        bookSection.appendChild(bookContainer);;

        clearInputs();
    }
    RemoveItems()
}
function clearInputs () {
    inputTitle.value = "";
    inputAuthor.value = "";
    inputPages.value = "";
    readCheck.checked = false;
    legendaryCheck.checked = false;
}

function legendary (legend) {
    if (legendaryCheck.checked) { // check if legendary is true
        legend = true;
        return legend;
    }
    else {
        legend = false;
        return legend;
    }
}

function libraryInfo () {
    
}
function RemoveItems() {
    deleteButton = document.querySelectorAll(".del");

    deleteButton.forEach(e => {
        e.addEventListener("click", removeBook)
    })
}
function removeBook (){
    const thisDataBook = this.getAttribute("data-book"); //gets the data-book number
    const bookDiv = document.getElementById("book-" + thisDataBook) //concat for searching for id
    bookDiv.remove();
    if (booksTotal < 0) {
        booksTotal = 0;
    }
    booksTotal--;
    totalcount.textContent = booksTotal;

    myLibrary.splice(thisDataBook, 1)
}