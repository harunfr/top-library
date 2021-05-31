let booksContainer = document.querySelector(".books-container");
let RemoveBookBtn = document.querySelector(".remove-book");
let addBookByPromptBtn = document.querySelector(".add-book-prompt");
let addBookByClick = document.querySelector(".add-book-click");

addBookByPromptBtn.addEventListener("click", addBookByPrompt);
RemoveBookBtn.addEventListener("click", showDeleteButtons);
addBookByClick.addEventListener("click", addByClick);

let myLibrary = [];

function Book(title, author, numberOfPages, isRead) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.isRead = isRead;
}
let temp = ["hobbit", "j.r.r", 170, "no"];
myLibrary.push(temp);

updateScreen();

function addBookByPrompt() {
  let respond = prompt("enter information for this book: ");
  let respondList = respond.split(",");

  let title = respondList[0];
  let author = respondList[1];
  let numberOfPages = respondList[2];
  let isRead = respondList[3];

  newBook = new Book(title, author, numberOfPages, isRead);
  myLibrary.push(Object.values(newBook));
  updateScreen();
}

function updateScreen() {
  booksContainer.textContent = "";
  updateInitialScreen();

  for (let i = 0; i < myLibrary.length; i++) {
    //
    removeThis = document.createElement("button");
    removeThis.classList.add("delete");
    removeThis.textContent = "Delete";
    removeThis.setAttribute("data-idx", i);
    //
    title = document.createElement("div");
    title.classList.add("title");
    title.textContent = myLibrary[i][0] || "not defined";
    //
    author = document.createElement("div");
    author.classList.add("author");
    author.textContent = myLibrary[i][1] || "not defined";
    //
    numberOfPages = document.createElement("div");
    numberOfPages.classList.add("number-of-pages");
    numberOfPages.textContent = myLibrary[i][2] || "not defined";
    //
    isRead = document.createElement("div");
    isRead.classList.add("is-read");
    isRead.textContent = myLibrary[i][3] || "not defined";
    //
    //
    booksContainer.appendChild(removeThis);
    booksContainer.appendChild(title);
    booksContainer.appendChild(author);
    booksContainer.appendChild(numberOfPages);
    booksContainer.appendChild(isRead);
  }
}

function RemoveBook(e) {
  e.target.classList.add("to-be-deleted");
  let removeIdx = this.getAttribute("data-idx");
  myLibrary.splice(removeIdx, 1);
}

function showDeleteButtons() {
  let deleteButtons = document.querySelectorAll(".delete");

  if (RemoveBookBtn.textContent === "Remove a Book") {
    deleteButtons.forEach((button) => {
      button.addEventListener("click", RemoveBook);
      button.classList.add("active");
    });
    RemoveBookBtn.textContent = "Finish Deleting";
  } else {
    RemoveBookBtn.textContent = "Remove a Book";

    updateScreen();
  }
  RemoveBookBtn.classList.toggle("delete-mode");
}

function updateInitialScreen() {
  iniBlank = document.createElement("div");

  iniBlank.textContent = "";
  //
  iniTitle = document.createElement("div");
  iniTitle.classList.add("title");
  iniTitle.textContent = "Title";
  //
  iniAuthor = document.createElement("div");
  iniAuthor.classList.add("author");
  iniAuthor.textContent = "Author";
  //
  iniPages = document.createElement("div");
  iniPages.classList.add("number-of-pages");
  iniPages.textContent = "Pages";
  //
  iniIsRead = document.createElement("div");
  iniIsRead.classList.add("is-read");
  iniIsRead.textContent = "Read Status";
  //
  //
  booksContainer.appendChild(iniBlank);
  booksContainer.appendChild(iniTitle);
  booksContainer.appendChild(iniAuthor);
  booksContainer.appendChild(iniPages);
  booksContainer.appendChild(iniIsRead);
}

function addByClick(e) {
  if (e.target.textContent === "Add Book by Clicking") {
    e.target.textContent = "Finish Adding";
    e.target.classList.add("finish-adding");
    //
    newTitle = document.createElement("input");
    newTitle.placeholder = "Title";
    newAuthor = document.createElement("input");
    newAuthor.placeholder = "Author";
    newPages = document.createElement("input");
    newPages.placeholder = "Pages";
    newIsRead = document.createElement("input");
    newIsRead.placeholder = "read or not read";
    newRemove = document.createElement("button");
    newRemove.classList.add("delete");
    newRemove.textContent = "Delete";
    newRemove.setAttribute("data-idx", myLibrary.length);
    //
    booksContainer.appendChild(newRemove);
    booksContainer.appendChild(newTitle);
    booksContainer.appendChild(newAuthor);
    booksContainer.appendChild(newPages);
    booksContainer.appendChild(newIsRead);
  } else {
    e.target.textContent = "Add Book by Clicking";
    e.target.classList.remove("finish-adding");
    //
  }
}
