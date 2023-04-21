import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { books } from "./books";

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((books) => books.id === id);
    console.log(book);
  };
  return (
    <section className="bookList">
      {books.map((book) => {
        const { id } = book;
        return <Book {...book} key={id} getBook={getBook} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author, getBook, id } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      <button onClick={() => getBook(id)}> Click me</button>
      <span className="number">{id}</span>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
