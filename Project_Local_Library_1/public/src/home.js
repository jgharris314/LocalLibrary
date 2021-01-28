const topFiverator = require('./topFiverator');

function totalBooksCount(books) {
  return books.length;
}

function totalAccountsCount(accounts) {
  return accounts.length;
}

function booksBorrowedCount(books) {
   //create array to filter books by checked out
   // return the length

   const checkedOut = books.filter((book)=> !book.borrows[0].returned);
   return checkedOut.length;
}

function getMostCommonGenres(books) {
  // prepare the data to send to topFiverator
    let preppedData = books.reduce((count, subject) => {
        const key = subject['genre'];
        if(!count[key]){
            count[key] = 0
        }
        count[key] ++;
        return count;
    },[])
 
  // send prepped data to the topFiverator
  const topFiveGenres = topFiverator(preppedData)
  return topFiveGenres;
}

function getMostPopularBooks(books) {
  // prepare the data to send to the topFiverator

  let preppedData = books.reduce((count, book) => {
    const key = book.title
    const value = book.borrows.length
    count[key] = value;
    return count;
  }, []);

  //send the prepped data off to the topFiverator
  const topFiveBooks = topFiverator(preppedData);
  return topFiveBooks;
}

function getMostPopularAuthors(books, authors) {
  // preparing data again. 
  let preppedData = books.reduce((count, book) => {
    const currentAuthor = authors.find((author) => (author.id === book.authorId)) // getting the apprpriate author obj
    const key = `${currentAuthor.name.first} ${currentAuthor.name.last}`; // getting the author name so it's formatted correctly for topFiverator
    const value = book.borrows.length;
    count[key] = value;
    return count;
  }, []);

  // send the prepped data off to the topFiverator
  const topFiveAuthors = topFiverator(preppedData);
  return topFiveAuthors;
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
