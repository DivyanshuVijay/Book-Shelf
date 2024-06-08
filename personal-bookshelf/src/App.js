import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookSearch from "./components/BookSearch";
import Bookshelf from "./components/Bookshelf";
import "./App.css";

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    setBookshelf(savedBookshelf);
  }, []);

  const addToBookshelf = (book) => {
    const newBookshelf = [...bookshelf, book];
    setBookshelf(newBookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(newBookshelf));
    alert("Book added to bookshelf");
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<BookSearch addToBookshelf={addToBookshelf} />}
          />
          <Route
            path="/bookshelf"
            element={<Bookshelf bookshelf={bookshelf} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
