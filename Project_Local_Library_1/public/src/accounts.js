function findAccountById(accounts, id) {
  return result = accounts.find((acc)=> acc.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountOne, accountTwo) => {
    return accountOne.name.last > accountTwo.name.last ? 1 : -1
  });
}

function numberOfBorrows(account, books) {
  let numBorrowed = 0;
// iterate through each book
  // iterate through each borrow log
  // if borrowed by the account increase tally
  for (book in books){
    const borrowedList = books[book].borrows
    for (borrow in borrowedList){
      if (account.id === borrowedList[borrow].id) {
        numBorrowed ++;
      }
    }
  }
  return numBorrowed;
}

function getBooksPossessedByAccount(account, books, authors) {
  // filter the books to only get checked out books by the specific account
  let checkedOut = books.filter(({borrows}) => (borrows[0].id === account.id  && !borrows[0].returned))
    .map((book) => {
      const author = authors.find((auth) => auth.id === book.authorId);       //get the appropriate author based off author id
      return {...book, author};
    })

  // let modifiedBooklist = [];

  // for (selectedAuthor of authors) {
  //   for (book of checkedOut) {
  //     if (book.authorId === selectedAuthor.id) {
  //       modifiedBooklist.push({...book, author: selectedAuthor});      original thought pattern
  //     }
  //   }
  // }
  return checkedOut;
  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
