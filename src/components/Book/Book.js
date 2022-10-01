/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Book.module.css';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div className={styles['book-container']}>
      <div>
        <h2>{title}</h2>
        <h3>{author}</h3>
      </div>
      <button className={styles['delete-btn']} type="submit">Delete</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
