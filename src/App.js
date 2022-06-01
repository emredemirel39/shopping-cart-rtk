import './styles/main.scss'
import { useEffect, useState } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from './features/bookSlice';
import { Route, Routes } from 'react-router';
import HomePage from './views/HomePage';
import Header from './components/Header';
import Booklist from './components/BookList';


function App() {

  const books = useSelector(state => state.books)

  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header/>
      <main>
        <Routes>
         <Route path='/' element={<HomePage/>} />
         <Route path='/booklist' element={<Booklist/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
