// 3. Create an array of objects representing books in a library. Each object has the following properties: id, title, author, and rating. Write a React component that takes the array of books as input and returns an unordered list of books, where each list item displays the book's title, author, and rating.

const books = [
  {
    id: 1,
    title: "Sherlock Holmes",
    author: "Arthur Conan Doyle",
    rating: 4.5
  },
  { id: 2, title: "Harry Potter", author: "JK Rowling", rating: 4.0 },
  { id: 3, title: "Malgudi Days", author: "R.K. Narayan", rating: 4.6 },
  {
    id: 4,
    title: "The girl on the train",
    author: "Paula Hawkins",
    rating: 4.3
  }
];

const BooksDetails = () => {
  return (
    <div>
      <h2 className="heading">Books To Read</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id} className="non-bullet-list">
            Book: {book.title} || Author: {book.author} || Rating: {book.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

function Sum({ a, b }) {
  return Number(a) + Number(b);
}

export default BooksDetails;
export { Sum as Add };
