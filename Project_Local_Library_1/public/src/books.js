function findAuthorById(authors, id) {
  return result = authors.find((auth) => auth.id === id);
}

function findBookById(books, id) {
  return result = books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  // create two open array to hold either returned or borrowed books
  let borrowedBooks = [];
  let returnedBooks = [];

  // itereate through each book and determine whether it is returned or not
  for (book in books) {
    const tempBook = books[book]
    tempBook.borrows[0].returned ? returnedBooks.push(tempBook) : borrowedBooks.push(tempBook);
  }
  bookList = [borrowedBooks, returnedBooks];
  return bookList;
}

function getBorrowersForBook(book, accounts) {
  const groupingAmount = 10 // length of the final array wanted
  // go through each borrow in a books borrow list and re map it along with the accont info that relates to the id on the borrow log
  const borrowerList = book.borrows.map((borrow) => {
    const account = accounts.find((acc) => acc.id === borrow.id);
    return {...borrow, ...account}
  });
  return borrowerList.slice(0, groupingAmount);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
