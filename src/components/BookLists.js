import { Link } from "react-router-dom";

const BookLists = ({ books }) => {
  return (
    <>
      {books?.map((book) => (
        <div key={book.id}>
          <Link to={`/books/${book.id}`}>{book.name}</Link>
          {/* <p>{book.content}</p> */}
        </div>
      ))}
    </>
  );
};
export default BookLists;
