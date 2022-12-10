import "./style.css";
import books from "./booksData";
import React from "react";
import HOC from "../Search/Search";

function Books(props) {
  let filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(props.searchedBook)
  );

  return (
    <>
      <input
        onChange={props.handleBookSearch}
        value={props.searchedBook}
        type="search"
        placeholder="Search"
      />
      <div className="books-container">
        {filteredBooks.map((book) => (
          <div className="book-card">
            <img className="book-img" src={book.image} alt="image" />
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <button className="buy-btn">Buy Now</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default HOC(Books);
