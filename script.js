const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author; 
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return `${this.title}, by ${this.author}, ${this.pages}, pages long, ${this.read ? `has been read` : `has not been read yet`}`
} 


function addToLibrary() {
    // do stuff here
}