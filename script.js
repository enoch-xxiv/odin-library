const table = document.getElementById("table")
const tableBody = document.querySelector("#table tbody");
const addBook = document.querySelector("#add-book")
const dialog = document.querySelector("#dialog")
const cancelButton = document.querySelector("#cancel-button")
const form = document.querySelector("#form")

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author; 
    this.pages = pages;
    this.read = read;
};

const library = [];

function updateTableVisibility() {
    if (library.length === 0) {
        table.style.display = "none";
    } else {
        table.style.display = "";
    }
}

updateTableVisibility()

function updateTable() {
    tableBody.textContent = ""
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


addBook.addEventListener("click", () => {
    dialog.showModal()
})

cancelButton.addEventListener("click", () => {
    dialog.close()
})

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let formData = new FormData(event.target)

    let title = formData.get("title")
    let author = formData.get("author")
    let pages = formData.get("pages")
    let read = formData.get("read") === "on" ? true : false

    let newBook = new Book(title, author, pages, read)

    library.push(newBook)

    updateTable()
    updateTableVisibility()

    dialog.close()
})
