let myLibrary = [
    {
        name: "Jooks",
        author: "ghhs. L.",
        pages: 112,
        isRead: false
    }
];
const bookSection = document.querySelector(".myBooks");
const button = document.querySelector(".button");

function Book() {
  // the constructor...
}
button.addEventListener("click", addBookToLibrary);

function addBookToLibrary(event) {
    const bookContainer = document.createElement("DIV");
    const book = document.createElement("DIV");
    const bookName = document.createElement("DIV");
    const bookNametxt = document.createElement("P");

    const bookInfo = document.createElement("DIV");

    bookInfo.innerHTML = `
    <p>Name: ${myLibrary[0].name}</p>
    <p>Author: ${myLibrary[0].author}</p>
    <p>Pages: ${myLibrary[0].pages}</p>
    `;
    bookNametxt.textContent = myLibrary[0].name;
    bookContainer.classList.add("book-container");
    book.classList.add("book");
    bookName.classList.add("book-name");
    
    bookName.appendChild(bookNametxt);
    book.appendChild(bookName);
    bookContainer.appendChild(book);
    bookContainer.appendChild(bookInfo);
    bookSection.appendChild(bookContainer);;
}