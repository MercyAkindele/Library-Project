function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
/*go into the books and look at the borrow status
 if the borrow status is set to false 
 push that book into a new array
 return the new array's length*/
let newBookArray=[]
books.map(book=>
  {
    if(!book.borrows[0].returned){
      newBookArray.push(book)
    }
})
return newBookArray.length
}

function getMostCommonGenres(books) {
  let genresArray=[]
  //get to the genres section of the book for every book
  
  books.map((book)=>{
    genresArray.push(book.genre)
    
  })
  //create placeholder for genres that have been seen
  let seenGenres={}
  //Go through my genres array
  for(let genre of genresArray){
    //find out if the genre is in the seenGenres list
    let genreIsThere = Object.keys(seenGenres).includes(genre) 
    //if genre not there, add genre and give it a value of 1
    if(!genreIsThere){
      seenGenres[genre]= 1
    }
    else{
      //If genre is there, add 1 to the value
      seenGenres[genre]+=1
    }
  }
  //outcome should be something like this {His:1, Sci:3 etc}
  //What we want is [{name:Sci, count:3}, {name:His, count:1}]
  //console.log(seenGenres)
  //create an array placeholder for genreNameAndCount
  let genreNameAndCountArr =[]
  /*for each genre in obj, create a name key where the values 
  is the genre, and a count key where the values is the 
  value of the genre */
  for(let genres in seenGenres){
    genreNameAndCountArr.push
    ({name:genres, count:seenGenres[genres]})
  }
  /*outcome should be something like 
  this[{name:His,count:1},{name:Sci, count:3}]
  What we want is [{name:Sci, count:3},{name:His, count:1}]*/
  //console.log(genreNameAndCountArr)
  //Sort array of objects using sort method
  genreNameAndCountArr.sort((genreA,genreB)=>
  genreA.count<genreB.count?1:-1)
  console.log(genreNameAndCountArr)
  //Take the ordered list and return only the top 5 using helper function
  return _returnTop5(genreNameAndCountArr)
}

function getMostPopularBooks(books) {
  //create an array placeholder
  let myMostPopBooks = []

  //go through each book
  for(let book of books){
    /*create a placeholder for the name of the book and the amount of times
     it was borrowed*/
    let name={}
    //push object key value pairs into array
    name['name']=book.title
    name['count']=book.borrows.length
    myMostPopBooks.push(name)
  }
  //sort from most favorite to least
  myMostPopBooks.sort((countA,countB)=>
  countA.count<countB.count?1:-1)
  console.log(myMostPopBooks)
  //return top 5 books using helper function
  return _returnTop5(myMostPopBooks)
  
}

function getMostPopularAuthors(books, authors) {
  let myArrayOfPopAuth=[]
  for(let book of books){
    let name={}
    let authorsName=authors.find(author=>
    author.id===book.authorId)
    
   name['name']=`${authorsName.name.first} ${authorsName.name.last}`
    name['count']=book.borrows.length
    myArrayOfPopAuth.push(name)
  }
   
   let nameCount={}
   for(let borrowed of myArrayOfPopAuth){
     let theName=borrowed.name
     let nameIsThere = Object.keys(nameCount).includes(theName)
     if(!nameIsThere){ 
      nameCount[theName]= borrowed.count
      
     } 
     else{
       nameCount[theName]+= borrowed.count
     }
   
  }
  
  let authNameAndCountArr =[]
  for(let popAuth in nameCount){
    authNameAndCountArr.push
    ({name:popAuth, count:nameCount[popAuth]})
  }
  
  
  authNameAndCountArr.sort((countA,countB)=>
  countA.count<countB.count?1:-1)

  return _returnTop5(authNameAndCountArr)
  
  

}
function _returnTop5(sortedArray){
  return sortedArray.slice(0,5)
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
