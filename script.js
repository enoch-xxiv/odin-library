const table = document.getElementById("table")
const tableBody = document.querySelector("#table tbody");
const addBook = document.querySelector("#add-book")
const dialog = document.querySelector("#dialog")
const cancelButton = document.querySelector("#cancel-button")

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author; 
    this.pages = pages;
    this.read = read;
};

const library = [];

function populateTable() {
    library.forEach((book) => {
        let tableRow = document.createElement("tr");
        for (const property in book) {
            let tableData = document.createElement("td");
            tableData.textContent = property === "read" ? (book[property] ? "✅" : "❌") : book[property];
            tableRow.appendChild(tableData);
        }
        tableBody.appendChild(tableRow);
    });
}

library.length > 0 ? populateTable() : table.style.display = "none"

addBook.addEventListener("click", () => {
    dialog.showModal()
})

cancelButton.addEventListener("click", () => {
    dialog.close()
})