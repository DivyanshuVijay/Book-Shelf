import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BookSearch = ({ addToBookshelf }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query.length > 2) {
      setLoading(true);
      fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then((response) => response.json())
        .then((data) => {
          setResults(data.docs);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div>
      <h1>Search by book name:</h1>
      <div className="search-bar">
        <input
          className="input-bar"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type a book name"
        />
        <Link to="/bookshelf">
          <button className="bookshelf-button">My Bookshelf</button>
        </Link>
      </div>
      <div className="results">
        {loading && <div>Fetching data from API...</div>}
        {error && <div>Error fetching data</div>}
        {results.map((book) => (
          <div key={book.key} className="book-card">
            <p>
              <strong>Book Title:</strong> {book.title}
            </p>
            <p>
              <strong>Edition Count:</strong> {book.edition_count}
            </p>
            <button onClick={() => addToBookshelf(book)}>
              Add to Bookshelf
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
