import "./App.css";
import { useEffect, useState } from "react";
import book1 from "./books/sample_book_1.txt";
import book2 from "./books/sample_book_2.txt";
import BookLists from "./components/BookLists";
import { Routes, Route } from "react-router-dom";
import BookDetails from "./components/BookDetails";

function App() {
  const [book1Content, setBook1Content] = useState("");
  const [book2Content, setBook2Content] = useState("");

  const books = [
    {
      id: "1",
      name: "Sample Book 1",
      fileLocation: book1,
      setBook: setBook1Content,
      content: book1Content,
    },
    {
      id: "2",
      name: "Sample Book 2",
      fileLocation: book2,
      setBook: setBook2Content,
      content: book2Content,
    },
  ];

  useEffect(() => {
    const fetchData = async (fileLocation, setBookContent) => {
      await fetch(fileLocation)
        .then((res) => res.text())
        .then((text) => setBookContent(text))
        .catch((err) => console.log(err));
    };
    books.map((book) => fetchData(book.fileLocation, book.setBook));
  }, [books]);

  return (
    <div className="App">
      <h1>Book Reading App</h1>

      <Routes>
        <Route path="" element={<BookLists books={books} />} />
        <Route path="/books/:id" element={<BookDetails books={books} />} />
      </Routes>
    </div>
  );
}

export default App;
