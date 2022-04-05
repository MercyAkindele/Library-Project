function findAccountById(accounts, id) {
  //returns the account object that has a matching id
  let found = accounts.find((account)=>account.id === id);
  return found
}

function sortAccountsByLastName(accounts) {
  let alphabetizedByLastName= accounts.sort((accountA, accountB)=>
  /*make sure to change the case to be all the same in order 
  to sort appropriately*/
  accountA.name.last.toUpperCase() > accountB.name.last.toUpperCase()
  ? 1: -1);
  return accounts
}

function getTotalNumberOfBorrows(account, books) {
  let filteredBorrowedBooksById = books.filter((book)=>{
    return book.borrows.some((borrow)=>{
      return borrow.id === account.id
    })
  });
  return filteredBorrowedBooksById.length
}

function getBooksPossessedByAccount(account, books, authors) {
let bookObject=[];

books.map(book => 
  {
    //if id matches account id, and if the return status is false
  if(book.borrows[0].id === account.id && !book.borrows[0].returned)
    {
      bookObject.push(book);
    }
}) 
bookObject.forEach(book=>
  {
    let theAuthor= authors.find(author=>author.id === book.authorId);
    {
      book['author']=theAuthor
    }
  })

return bookObject;
}




module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
