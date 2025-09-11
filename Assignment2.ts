interface Book {
    title: string
    author: string
    pages: number
    isAvailable: boolean
}

function printBook(book: Book): void {
    console.log('Name of the book: ' + book.title)
    console.log('Author of the book: ' + book.author)
    console.log('Number of pages in the book: ' + book.pages)
    console.log('Is the book readily avaialble? ' + book.isAvailable)
}

let mybooks = { title: "MYPLAN", author: "SUNIL", pages: 50, isAvailable: true }
printBook(mybooks)

console.log('*********************************************')

let tsConcepts = { title: "LEARN TYPESCRIPT IN 7 DAYS", author: "SUNIL", pages: 200, isAvailable: true }
printBook(tsConcepts)