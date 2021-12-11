import { useDispatch } from 'react-redux';
import { removeBook } from '../../../redux/books/books';

const Book = (props) => {
  const { name, id } = { ...props };
  const dispatch = useDispatch();

  const removeBookHandler = async () => {
    dispatch(removeBook(id));
  };

  return (
    <li className="book">
      <span>
        {name}
        {' '}
      </span>
      {' '}
      <button type="button" onClick={removeBookHandler} className="remove-book">Remove</button>
    </li>
  );
};

export default Book;
