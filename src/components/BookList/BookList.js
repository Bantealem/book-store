import { useSelector } from 'react-redux';
import Book from '../Book/Book';
import AddBook from '../Inputbooks/AddBook';
import styles from './BookList.module.css';

const BookList = () => {
  const bookings = useSelector((state) => state.books);
  return (
    <div className={styles['booklist-container']}>
      {bookings.map((book) => (
        <Book
          id={book.id}
          title={book.title}
          author={book.author}
          key={book.id}
        />
      ))}
      <AddBook />
    </div>
  );
};

export default BookList;
