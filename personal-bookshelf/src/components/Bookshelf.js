import React from "react";
import { Link } from "react-router-dom";

const Bookshelf = ({ bookshelf }) => {
  return (
    <div>
      <h1>My Bookshelf</h1>
      <Link to="/">
        <button>Back</button>
      </Link>
      <div></div>

      <div className="bookshelf">
        {bookshelf.map((book, index) => (
          <div key={index} className="book-card">
            <p>
              <strong>Book Title:</strong> {book.title}
            </p>
            <p>
              <strong>Edition Count:</strong> {book.edition_count}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
