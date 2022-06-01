import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../../features/bookSlice';
import styles from './BookList.module.scss';
import Loading from '../Loading';

const BookList = () => {

    const books = useSelector(state => state.books);
    const dispatch = useDispatch();

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
                  <img src={book.image} alt="" />
                  <h3>{book.name}</h3>
                  <p>{book.author}</p>
                  <p>Price: {book.price}</p>
                </div>
              </li>
          ))}
          </ul>
        )}
    </div>
  )
}

export default BookList