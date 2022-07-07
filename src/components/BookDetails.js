import { useParams, Link } from "react-router-dom";

const BookDetails = ({ books }) => {
  const params = useParams();
  console.log(params.id);

  return (
    <div>
      <Link to="/">Home</Link>

      <h1>Book Details</h1>
      {books
        .filter((book) => book.id === params.id)
        .map((bookDetails) => (
          <div key={bookDetails.id}>
            <h2>Name: {bookDetails.name}</h2>
            <p>Content: {bookDetails.content}</p>
          </div>
        ))}
    </div>
  );
};
export default BookDetails;
