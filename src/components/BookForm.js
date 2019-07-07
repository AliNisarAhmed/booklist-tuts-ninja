import React from "react";
import { BookContext } from "../context/BookContext";

export default function BookForm() {
  const { dispatch } = React.useContext(BookContext);
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");

  const onTitleChange = e => {
    setTitle(e.target.value);
  };

  const onAuthorChange = e => {
    setAuthor(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_BOOK",
      book: {
        title,
        author
      }
    });
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={onTitleChange}
        required
      />
      <input
        type="text"
        placeholder="Book Author"
        value={author}
        onChange={onAuthorChange}
        required
      />
      <input type="submit" value="Add Book" />
    </form>
  );
}
