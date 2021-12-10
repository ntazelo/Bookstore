/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { removeBook } from '../../../redux/books/books';

const Book = (props) => {
  const { name, author, id } = props;
  const dispatch = useDispatch();

  const removeBookHandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <li className="book">
      <span>
        {name}
        {' '}
        by
        {' '}
        {author}
      </span>

      <button type="button" onClick={removeBookHandler} className="remove-book">Remove</button>
    </li>
  );
};

export default Book;
