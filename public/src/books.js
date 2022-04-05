function findAuthorById(authors, id) {
  //returns author object 
  let authorsInfo= authors.find((author)=>author.id === id);
  return authorsInfo
}
//returns book object
function findBookById(books, id) {
  let matchingBookById = books.find((book)=>book.id === id);
  return matchingBookById
}

function partitionBooksByBorrowedStatus(books) {
  /*with each book object, find if the borrowed status is 
  true or false. */
return books.reduce((results, book)=>{
  results[book.borrows.find(borrow=> !borrow.returned)?0:
    1].push(books)
    return results
},[[],[]])
}; 

//for every account, add borrowed information that matches the id
function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => ({ 
    ...borrow, 
    ...accounts.find(account => account.id === borrow.id),
  }))
  //return an array of 10 or fewer
  .slice(0, 10)
  
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
