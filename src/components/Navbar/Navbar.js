import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles['nav-container']}>
    <ul className={styles['nav-list']}>
      <li className={styles['nav-item']}>
        <Link to="/">Books</Link>
      </li>
      <li className={styles['nav-item']}>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
