const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';
export const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/sQV2WmCMUQ06RpGshCuE/books';

const initialState = [];

export const fetchBook = () => async (dispatch) => {
  const response = await fetch(`${API}`);
  const Books = await response.json();
  const booksID = Object.keys(Books);
  const books = booksID.map((key) => {
    const book = Books[key][0];
    book.id = Number(key);
    return book;
  });
  dispatch({
    type: FETCH_BOOKS,
    payload: books,
  });
};

export const addBook = (payload) => async (dispatch) => {
  await fetch(`${API}`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: payload.id,
      title: payload.title,
      category: payload.category,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  dispatch({
    type: ADD_BOOK,
    payload,
  });
};

export const removeBook = (payload) => async (dispatch) => {
  await fetch(`${API}/${payload}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: payload,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  dispatch({
    type: REMOVE_BOOK,
    payload,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:

      return [...state, action.payload];

    case REMOVE_BOOK:

      return state.filter((book) => book.id !== action.payload);
    case FETCH_BOOKS:

      return [...state, ...action.payload];

    default:
      return state;
  }
};

export default reducer;
