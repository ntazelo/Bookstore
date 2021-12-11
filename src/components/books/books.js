import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Book from './book/book';
import { addBook, fetchBook } from '../../redux/books/books';
import './books.css';

const Books = () => {
  const [book, setBook] = useState('');
  const [category, setCategory] = useState('');
  const data = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchBook());
    }
  }, []);

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (book.length > 0 && category.length > 0) {
      const newBook = {
        id: Math.floor(Math.random() * 100000),
        title: book,
        category,
      };
      dispatch(addBook(newBook));

      setBook('');
      setCategory('');
    }
  };

  const addBookField = (e) => {
    setBook(e.target.value);
  };

  const addCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="list-book-cont">
      <ul className="list-book">
        {data.length > 0 && data.map((book) => (
          <Book
            key={book.id}
            name={book.title}
            id={book.id}
            category={book.category}
          />
        ))}
        <hr className="horizontal-line" />
      </ul>
      <div className="new-book-cont">
        <h1 className="title-hint">Add new Book</h1>

        <form className="form-control" onSubmit={submitBookToStore}>
          <input type="text" required placeholder="Enter the book" value={book} className="book-name" onChange={addBookField} />
          <select name="category" className="category-input" value={category} onChange={addCategory} required>
            <option value="">Category</option>
            <option value="sport">sport</option>
            <option value="thriller">thriller</option>
            <option value="romance">romance</option>
            <option value="action">action</option>
            <option value="horror">horror</option>
          </select>
          <button type="submit" className="btn-book">Add book</button>
        </form>
      </div>
    </div>
  );
};

export default Books;
