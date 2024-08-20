const books = [
    {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
    },
    {
        title: 'Cien años de soledad',
        author: 'Gabriel García Márquez',
    },
    {   
        title: '1984',
        author: 'George Orwell', 
    },
    {
        title: 'Animal Farm',
        author: 'George Orwell',
    }
];
function getTheTitles(books){
    return books.map(book => book.title);
}
console.log(getTheTitles(books));