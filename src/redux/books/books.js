const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const REEVALUATE = 'bookStore/books/REEVALUATE';
export const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/sQV2WmCMUQ06RpGshCuE/books';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const reevaluated = () => ({
  type: REEVALUATE,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:

      return [...state, action.payload];

    case REMOVE_BOOK:

      return state.filter((book) => book.id !== action.payload);

    case REEVALUATE:

      return state.splice();

    default:
      return state;
  }
};

export const getBooks = async () => {
  const booksList = await fetch(`${API}`)
    .then((response) => response.json());
  console.log(booksList);
  /* const booksID = Object.keys(booksList);
   const formatedBooks = [];
  booksID.map((key) => formatedBooks.push({
    id: key,
    title: booksList[key][0].title,
    category: booksList[key][0].category,
  }));
  dispatch(addBook(formatedBooks)); */
};

export const postBook = async (newBook) => {
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
  }).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  });
  /* dispatch(addBook(newBook)); */
};

/* export const deleteBook = async (id) => {
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
 */
export default reducer;
