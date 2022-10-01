import React, { useState } from 'react';
import styles from './AddBook.module.css';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
    };
    setTitle('');
    setAuthor('');
    return newBook;
  };

  return (
    <div className={styles['form-container']}>
      <h1>Add new book</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Add book</button>
      </form>
    </div>
  );
};

export default AddBook;
