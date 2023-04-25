let books = [
];

const bookName = document.querySelector('.book');
const authorName = document.querySelector('.author');
const add = document.querySelector('.add');
const container = document.querySelector('.contain');


function removeBook(book){
    books = books.filter(b => b !== book);
    console.log(books)
    console.log(book)

    container.innerHTML="";
    display(book);


}

function display(book) {
    const div = document.createElement('div');
    div.classList.add('book-list');
    div.innerHTML = "";


    container.innerHTML = books.reduce((output, book) => (
        `${output
        }
        <div class="book-list">
        <span>${book.title}</span>
        <span>${book.writer}</span>
        <button class="button">remove</button>
        </div> 
      `
      ), '');
       
       const button = document.querySelectorAll('.button');
       button.forEach((btn, index) => {
        btn.addEventListener("click", () => removeBook(books[index]));  
       })
}
 
    add.addEventListener('click', () => {
        let newBook = { title: bookName.value, writer: authorName.value}
        books.push(newBook);
        display(newBook);
    })
   
 