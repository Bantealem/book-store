import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from '../Book/Book';
import AddBook from '../Inputbooks/AddBook';
import styles from './BookList.module.css';

const BookList = () => {
  function getInitialBooks() {
    const books = [
      {
        id: uuidv4(),
        title: '12 Rules of life',
        author: 'Jordan Peterson',
      },
      {
        id: uuidv4(),
        title: 'Baron a crime',
        author: 'Stefen',
      },
      {
        id: uuidv4(),
        title: 'The confession',
        author: 'Augestine',
      },
    ];
    if (books) {
      return books;
    }
    return [];
  }

  const [books] = useState(getInitialBooks());

  return (
    <div className={styles['booklist-container']}>
      <ul className={styles['book-list']}>
        {books.map((book) => (
          <li className={styles['book-item']} key={book.id}>
            <Book title={book.title} author={book.author} />
          </li>
        ))}
      </ul>
      <AddBook />
    </div>
  );
};

export default BookList;
