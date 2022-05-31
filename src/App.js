import { useEffect, useState } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from './features/bookSlice';

function App() {

  const books = useSelector(state => state.books)

  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => dispatch(fetchBooks())}>Fetch books</button>
        <div>{books.loading && 'loading'}</div>
        <div>{books.data.length > 0 && books.data[0].name}</div>
      </header>
    </div>
  );
}

export default App;
