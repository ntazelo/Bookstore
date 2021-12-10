import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Book from './book/book';
import { addBook, API } from '../../redux/books/books';
import './books.css';

const Books = () => {
  const [book, setBook] = useState('');
  const [category, setCategory] = useState('');
  const data = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(async () => {
    try {
      const response = await fetch(`${API}`);
      const Books = await response.json();
      const booksID = Object.keys(Books);
      const books = booksID.map((key) => {
        const book = Books[key][0];
        book.id = key;
        return book;
      });
      books.forEach((book) => {
        dispatch(addBook(book));
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const submitBookToStore = async (e) => {
    e.preventDefault();
    if (book.length > 0 && category.length > 0) {
      const newBook = {
        id: Math.floor(Math.random() * 100000),
        title: book,
        category,
      };
      try {
        await fetch(`${API}`, {
          method: 'POST',
          body: JSON.stringify({
            item_id: newBook.id,
            title: newBook.title,
            category: newBook.category,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        dispatch(addBook(newBook));
      } catch (err) {
        console.log(err);
      }
      setBook('');
      setCategory('');
    }
    console.log(data, 'store');
  };

  const addBookField = (e) => {
    setBook(e.target.value);
  };

  const addCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="list-book-cont">
      <form className="form-control" onSubmit={submitBookToStore}>
        <input type="text" required placeholder="Enter the book" value={book} className="book-name" onChange={addBookField} />
        <select name="category" value={category} onChange={addCategory} required>
          <option value="">Category</option>
          <option value="sport">sport</option>
          <option value="thriller">thriller</option>
          <option value="romance">romance</option>
          <option value="action">action</option>
          <option value="horror">horror</option>
        </select>
        <button type="submit">Add book</button>
      </form>

      <ul className="list-book-cont">
        {data.length > 0 && data.map((book) => (
          <Book
            key={book.id}
            name={book.title}
            author={book.author}
            id={book.id}
          />
        ))}

      </ul>
    </div>
  );
};

export default Books;
