/* eslint-disable */
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { addBooks } from "../../redux/Books/Books";
import styles from "./AddBook.module.css";

const AddBook = () => {
  const dispatch = useDispatch();
  const [inputState, setState] = useState({title: '', author: ''});
  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...inputState, [e.target.name]: e.target.value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!inputState.title.trim() ||!inputState.author.trim()) return;
    const book = {
      id: uuidv4(),
      title: inputState.title,
      author: inputState.author,
    };
    dispatch(addBooks(book));
    setState({title: '', author:''})
  };

  return (
    <div className={styles["form-container"]}>
      <h1>Add new book</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          value={inputState.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Author"
          value={inputState.author}
          onChange={handleChange}
        />
        <button type="submit">Add book</button>
      </form>
    </div>
  );
};

export default AddBook;
