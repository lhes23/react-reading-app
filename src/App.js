import "./App.css";
import { useEffect, useReducer } from "react";
import { Routes, Route } from "react-router-dom";

// Helpers
import { reducer, initialState, fetchData } from "./util/store";

// Components
import BookLists from "./components/BookLists";
import BookDetails from "./components/BookDetails";

function App() {
  const [books, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    books.map((book) => fetchData(book, dispatch));
  }, [books]);

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
