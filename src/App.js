import { Route, Routes } from 'react-router-dom';
import Books from './components/books/books';
import Categories from './components/categories/categories';
import './App.css';
import Header from './components/header/header';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
