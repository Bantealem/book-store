import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/book';
import Book from '../components/Book';
import Form from '../components/Form';
import '../index.css';

function HomePage() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      {books.map((book) => (
        <Book
          key={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
          bookId={book.item_id}
        />
      ))}
      <hr className="container" />
      <div className="container">
        <h3>ADD NEW BOOK</h3>
      </div>
      <Form className="container" />
    </>
  );
}

export default HomePage;
