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
    tableBody.textContent = "";
    library.forEach((book, index) => {
        let tableRow = document.createElement("tr");
        tableRow.dataset.index = index;

        let removeButtonTd = document.createElement("td");
        let removeButton = document.createElement("button");
        removeButton.classList.add("remove-button")
        removeButton.textContent = "X";
        removeButton.addEventListener("click", function() {
            library.splice(index, 1);
            updateTable();
            updateTableVisibility();
        });

        removeButtonTd.appendChild(removeButton);
        tableRow.appendChild(removeButtonTd);

        for (const property in book) {
            let tableData = document.createElement("td");
            if (property === "read") {
                let toggleReadButton = document.createElement("button");
                toggleReadButton.classList.add("toggle-read-button");
                toggleReadButton.textContent = book[property] ? "👍" : "👎";
                toggleReadButton.addEventListener("click", function() {
                    book.read = !book.read;
                    updateTable();
                });
                tableData.appendChild(toggleReadButton);
            } else {
                tableData.textContent = book[property];
            }
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
