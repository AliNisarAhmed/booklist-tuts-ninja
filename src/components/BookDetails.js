import React from "react";
import { BookContext } from "../context/BookContext";

export default function BookDetails({ book }) {
  const { dispatch } = React.useContext(BookContext);

  const onRemoveClickHandler = () => {
    dispatch({
      type: "REMOVE_BOOK",
      id: book.id
    });
  };
  return (
    <li onClick={onRemoveClickHandler}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
}
