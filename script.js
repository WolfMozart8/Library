const bookSection = document.querySelector(".myBooks");
const button = document.querySelector(".button");
const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const inputPages = document.getElementById("pages");
const readCheck = document.getElementById("check");

function Book(title, autor, pages, isRead) {
    this.title = title;
    this.author = autor;
    this.pages = pages;
    this.isRead = isRead;
}
let booksTotal = 0;


let myLibrary = [];


button.addEventListener("click", addBookToLibrary);

function addBookToLibrary() {
const inputTitleV = inputTitle.value;
const inputAuthorV = inputAuthor.value;
const inputPagesV = inputPages.value;

    if (inputTitleV && inputAuthorV && inputPagesV) {
        const newBook = new Book(inputTitleV,inputAuthorV, inputPagesV);
        myLibrary.push(newBook);

        const bookContainer = document.createElement("DIV");
        const book = document.createElement("DIV");
        const bookName = document.createElement("DIV");
        const bookNametxt = document.createElement("P");
    
        const bookInfo = document.createElement("DIV");
    
        bookInfo.innerHTML = `
        <p>Name: ${myLibrary[0].title}</p>
        <p>Author: ${myLibrary[0].author}</p>
        <p>Pages: ${myLibrary[0].pages}</p>
        `;
        bookNametxt.textContent = myLibrary[0].title;
        bookContainer.classList.add("book-container");
        book.classList.add("book");
        bookName.classList.add("book-name");
        
        bookName.appendChild(bookNametxt);
        book.appendChild(bookName);
        bookContainer.appendChild(book);
        bookContainer.appendChild(bookInfo);
        bookSection.appendChild(bookContainer);;

        clearInputs();
    }
}
function clearInputs () {
    inputTitle.value = "";
    inputAuthor.value = "";
    inputPages.value = "";
}