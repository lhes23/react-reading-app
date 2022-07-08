import book1 from "../books/sample_book_1.txt";
import book2 from "../books/sample_book_2.txt";

export let initialState = [
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

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADDCONTENT":
      return state.map((book) => {
        if (book.id === action.id) {
          return { ...book, content: action.payload };
        } else {
          return book;
        }
      });
    default:
      return state;
  }
};

export const fetchData = async (book, dispatch) => {
  await fetch(book.fileLocation)
    .then((res) => res.text())
    .then((text) =>
      dispatch({ type: "ADDCONTENT", id: book.id, payload: text })
    )
    .catch((err) => console.log(err));
};
