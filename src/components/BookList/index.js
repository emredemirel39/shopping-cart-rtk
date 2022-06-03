import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../../features/bookSlice';
import { addToCart } from '../../features/cartSlice';
import styles from './BookList.module.scss';
import Loading from '../Loading';
const BookList = () => {

    const books = useSelector(state => state.books);
    const dispatch = useDispatch();

    const handleAddToCart = book => {
      dispatch(addToCart(book));
    };

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

  return (
    <div className={styles.bookList}>
        {books.loading && <Loading/>}
        {books.data && (
          <ul>
            {books.data.map(book =>(
              <li key={book.id}>
                <div className={styles.bookCard}>
                  <img src={book.image} alt={book.id} />
                  <h3>{book.name}</h3>
                  <p><b>Author: </b>{book.author}</p>
                  <p><b>Price: </b>{book.price}</p>
                  <button onClick={() => handleAddToCart(book)} >Add to Cart</button>
                </div>
              </li>
          ))}
          </ul>
        )}
    </div>
  )
}

export default BookList;