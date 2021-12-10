/* eslint-disable react/jsx-wrap-multilines */
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Book from './book/book';
import './books.css';
import { addBook } from '../../redux/books/books';

const Books = () => {
  const [book, setBook] = useState('');
  const [author, setAuthor] = useState('');
  const data = useSelector((state) => state.booksReducer);

  const dispatch = useDispatch();
  const submitBookToStore = () => {
    if (book.length > 0 && author.length > 0) {
      const newBook = {
        id: Math.floor(Math.random() * 100000),
        title: book,
        author,
      };
      dispatch(addBook(newBook));
      setBook('');
      setAuthor('');
    }
    console.log(data, 'store');
  };

  const addBookField = (e) => {
    setBook(e.target.value);
  };

  const addAuthor = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <div className="list-book-cont">
      <form className="form-control">
        <input type="text" placeholder="Enter the book" value={book} className="book-name" onChange={addBookField} />
        <input type="text" placeholder="Enter the author" value={author} className="book-author" onChange={addAuthor} />
        <button type="button" onClick={submitBookToStore}>Add book</button>
      </form>

      <ul className="list-book-cont">
        {data.length > 0 && data.map((book) => <Book
          key={book.id}
          name={book.title}
          author={book.author}
          id={book.id}
        />)}

      </ul>
    </div>
  );
};

export default Books;
