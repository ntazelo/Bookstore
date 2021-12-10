/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { removeBook, API } from '../../../redux/books/books';

const Book = (props) => {
  const { name, author, id } = props;
  const dispatch = useDispatch();

  const removeBookHandler = async () => {
    await fetch(`${API}/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
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
