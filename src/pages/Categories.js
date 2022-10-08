import '../index.css';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const handleClick = (e) => {
    if (categories.length === 0) {
      dispatch(checkStatus());
    } else if (categories.length > 0) {
      e.target.disabled = true;
    }
  };
  return (
    <div className="container">
      <h3>{categories}</h3>
      <div className="cat-center">
        <button type="button" className="btn btn-primary" onClick={(e) => handleClick(e)}>Check status</button>
      </div>
    </div>
  );
}

export default Categories;
