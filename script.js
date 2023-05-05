const books = [
  {
    title: "חלון לים",
    author: "א.ב. אזר",
    price: 10.99,
    image:
      "https://nivbook.co.il/wp-content/uploads/slider/cache/006d2d8644a572b9fef7dfe709a3dbc4/jaredd-craig-HH4WBGNyltc-unsplash_smaller.jpg",
  },
  {
    title: "מעוף השמים",
    author: "אסף צור",
    price: 12.99,
    image:
      "https://www.srugim.co.il/i/wp-content/uploads/2021/05/shutterstock_1454748800__w650h331q80.jpg",
  },
  {
    title: "אל האופק",
    author: "חיים לוץ",
    price: 8.99,
    image:
      "https://maof3.co.il/wp-content/uploads/2021/08/%D7%A8%D7%A9%D7%99%D7%9E%D7%AA-%D7%A1%D7%A4%D7%A8%D7%99%D7%9D-%D7%9E%D7%95%D7%9E%D7%9C%D7%A6%D7%99%D7%9D-%D7%9C%D7%94%D7%A6%D7%9C%D7%97%D7%94-%D7%A2%D7%A1%D7%A7%D7%99%D7%AA.jpg",
  },
];

const bookList = document.getElementById("book-list");

books.forEach((book) => {
  const bookDiv = document.createElement("div");
  bookDiv.className = "book";
  bookDiv.innerHTML = `
    <img src="${book.image}" alt="${book.title}">
    <h2>${book.title}</h2>
    <p>by ${book.author}</p>
    <p>ש"ח ${book.price.toFixed(2)}</p>
    <button onclick="deleteBook(${books.indexOf(book)})">Delete</button>
  `;
  bookList.appendChild(bookDiv);
});

const renderBooks = () => {
  bookList.innerHTML = "";
  books.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.className = "book";
    bookDiv.innerHTML = `
      <img src="${book.image}" alt="${book.title}">
      <h2>${book.title}</h2>
      <p>by ${book.author}</p>
      <p>ש"ח ${book.price.toFixed(2)}</p>
      <button onclick="deleteBook(${books.indexOf(book)})">Delete</button>
    `;
    bookList.appendChild(bookDiv);
  });
};

const addBook = () => {
  const title = prompt("Enter book title:");
  const author = prompt("Enter book author:");
  const price = parseFloat(prompt("Enter book price:"));
  const image = prompt("Enter book image URL:");

  if (title && author && price && image) {
    books.push({ title, author, price, image });
    console.log("Book added successfully!");
    renderBooks();
  } else {
    console.log("Invalid input. Please try again.");
  }
};

const deleteBook = (index) => {
  books.splice(index, 1);
  console.log("Book deleted successfully!");
  renderBooks();
};
