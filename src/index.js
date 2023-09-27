import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import Book from "./book";
const BookList = () => {
  const someValue = "shakeAndBake";

  return (
    <>
    <h1>Amazon Best Sellers</h1>
    <section className="booklist">
      {books.map((book) => {
        const { img, title, Author, id } = book;
        return <Book {...book} key={id}></Book>;
      })}
    </section>
      </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
