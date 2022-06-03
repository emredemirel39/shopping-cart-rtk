import './styles/main.scss';
import { Route, Routes } from 'react-router';
import HomePage from './views/HomePage';
import Header from './components/Header';
import BookListPage from './views/BookListPage';
import CartPage from './views/CartPage';


function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Routes>
         <Route path='/' element={<HomePage/>} />
         <Route path='/booklist' element={<BookListPage/>}/>
         <Route path='/cart' element={<CartPage/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
