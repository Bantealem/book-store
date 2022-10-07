/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './Book.module.css';
import { deleteBooks } from '../../redux/Books/Books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { title, author, id } = props;
  const deleteBook = () => {
    dispatch(deleteBooks(id));
  };
  return (
    <div className={styles['book-container']}>
      <div>
        <h2>{title}</h2>
        <h3>{author}</h3>
      </div>
      <button className={styles['delete-btn']} type="button" onClick={deleteBook}>Delete</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
