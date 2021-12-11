/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { removeBook, API } from '../../../redux/books/books';
import './book.css';

const Book = (props) => {
  const { name, id, category } = props;
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
      <div className="info-book-cont">
        <h4 className="category-book">{category}</h4>
        <h2 className="title-book">{name}</h2>
        <p className="author-book">Author</p>
        <div className="btn-cont">
          <button type="button" className="edit-book">Comments</button>
          <button type="button" onClick={removeBookHandler} className="edit-book">Remove</button>
          <button type="button" className="edit-book">Edit</button>
        </div>
      </div>
      <div className="cont-status-progress">
        <div className="stat-cont">
          <div className="row d-flex justify-content-center mt-100">
            <div className="col-md-6">
              <div className="progress blue">
                {' '}
                <span className="progress-left">
                  {' '}
                  <span className="progress-bar" />
                  {' '}
                </span>
                {' '}
                <span className="progress-right">
                  {' '}
                  <span className="progress-bar" />
                  {' '}
                </span>
                <div className="progress-value">90%</div>
              </div>
            </div>
          </div>
          <div className="perc-cont">
            <span className="perc">90%</span>
            <span className="status">completed</span>
          </div>
        </div>
        <div className="progress-cont">
          <h3 className="chapter">Current chapter</h3>
          <p className="current-chapter">Chapter 13</p>
          <button type="button" className="btn-progress">Update Progress</button>
        </div>
      </div>

    </li>
  );
};

export default Book;
