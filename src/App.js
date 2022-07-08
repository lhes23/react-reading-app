import "./App.css";
import { useEffect, useState } from "react";
import book1 from "./books/sample_book_1.txt";
import book2 from "./books/sample_book_2.txt";
import BookLists from "./components/BookLists";
import { Routes, Route } from "react-router-dom";
import BookDetails from "./components/BookDetails";

let books = [
  {
    id: "1",
    name: "Sample Book 1",
    fileLocation: book1,
    content: "",
  },
  {
    id: "2",
    name: "Sample Book 2",
    fileLocation: book2,
    content: "",
  },
];

function App() {
  useEffect(() => {
    const fetchData = async (book) => {
      await fetch(book.fileLocation)
        .then((res) => res.text())
        .then((text) => (book.content = text))
        .catch((err) => console.log(err));
    };

    books.map((book) => fetchData(book));
  }, []);

  return (
    <div className="container">
      <h1 className="title">Book Reading App</h1>
      <Routes>
        <Route path="" element={<BookLists books={books} />} />
        <Route path="/books/:id" element={<BookDetails books={books} />} />
      </Routes>
    </div>
  );
}

export default App;
