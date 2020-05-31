function renderBooks(book_list) {
  //create table
  var tbody = document.querySelector("tbody");
  tbody.textContent = "";

  //populate table
  for (var idx = 0; idx < book_list.length; idx++) {
    var book = book_list[idx];
    tbody.appendChild(renderBook(book));
  }
}

//creates rows within table
function renderBook(book) {
  var tr = document.createElement("tr");
  var dateR = new Date(book.dateRead);
  dateR = dateR.toDateString();
  tr.appendChild(renderBookProp(book.title, true));
  tr.appendChild(renderBookProp(book.author));
  tr.appendChild(renderBookProp(dateR));
  tr.appendChild(renderBookProp(book.rating));
  return tr;
}
//populates cells in the table
function renderBookProp(content, rightAligned) {
  var td = document.createElement("td");
  td.textContent = content;
  if (rightAligned) {
    td.classList.add("rightAligned");
  }
  return td;
}

//should this book be included?
function isBookFound(book) {
  // make title lowercase
  var lowercaseTitle = book.title.toLowerCase();
  var lowercaseAuthor = book.author.toLowerCase();

  // get user input
  var userInput = searchInput.value;

  // Make input lowercase
  var lowercaseUserInput = userInput.toLowerCase();

  if (
    lowercaseTitle.indexOf(lowercaseUserInput) >= 0 ||
    lowercaseAuthor.indexOf(lowercaseUserInput) >= 0
  ) {
    return true;
  } else {
    return false;
  }
}

var searchInput = document.getElementById("book-filter");

// listens for input
searchInput.addEventListener("input", function () {
  // Find matching books
  var filtered_books = BOOKS.filter(isBookFound);

  // Update book table with new list
  renderBooks(filtered_books);
});
