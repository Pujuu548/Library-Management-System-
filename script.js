// Define Book class
class Book {
    constructor(title, author, pages, genre) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.genre = genre;
    }
}

// Global array to store books
let library = [];

// Add Book to Library function
function addBook(event) {
    event.preventDefault();
    
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const genre = document.getElementById("genre").value;

    const newBook = new Book(title, author, pages, genre);
    library.push(newBook);
    
    displayBooks(library);
    
    // Reset form
    document.getElementById("addBookForm").reset();
}

// Display Books function
function displayBooks(books) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    if (books.length === 0) {
        document.getElementById("noBooksMessage").style.display = "block";
    } else {
        document.getElementById("noBooksMessage").style.display = "none";
        books.forEach(book => {
            const bookDiv = document.createElement("div");
            bookDiv.classList.add("book");
            bookDiv.innerHTML = `
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Pages: ${book.pages}</p>
                <p>Genre: ${book.genre}</p>
            `;
            bookList.appendChild(bookDiv);
        });
    }
}

// Search Books function
function searchBooks() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filteredBooks = library.filter(book => book.title.toLowerCase().includes(searchTerm));
    displayBooks(filteredBooks);
}

// Event listeners
document.getElementById("addBookForm").addEventListener("submit", addBook);
document.getElementById("searchInput").addEventListener("input", searchBooks);
