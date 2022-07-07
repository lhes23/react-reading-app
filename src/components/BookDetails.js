import { useParams, Link } from "react-router-dom";

const BookDetails = ({ books }) => {
  const params = useParams();
  return (
    <div>
      <Link to="/">Home</Link>

      <h2>Book Details</h2>
      {books
        .filter((book) => book.id === params.id)
        .map((bookDetails) => (
          <div key={bookDetails.id}>
            <h2>Name: {bookDetails.name}</h2>
            <h3>Content:</h3>
            <p className="content">{bookDetails.content}</p>
          </div>
        ))}
    </div>
  );
};
export default BookDetails;
