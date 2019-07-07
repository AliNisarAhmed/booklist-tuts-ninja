import React from "react";
import { BookContext } from "../context/BookContext";

export default function Navbar() {
  const { books } = React.useContext(BookContext);

  return (
    <div className="navbar">
      <h1>Ninja Reading List</h1>
      <p>Currently you have {books.length} books to get through...</p>
    </div>
  );
}
