import { useDispatch } from 'react-redux';
import Book from './book/book';
import './books.css';
import { addBook } from '../../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const submitBookToStore = () => {
    const newBook = {
      id: Math.floor(Math.random() * 100000),
      title: 'book',
      author: 'author',
    };
    dispatch(addBook(newBook));
  };

  return (
    <ul className="list-book-cont">
      <Book />
      <button type="button" onClick={submitBookToStore}>Add book</button>
    </ul>
  );
};

export default Books;
