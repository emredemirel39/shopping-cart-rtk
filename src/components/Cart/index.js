import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, removeBookFromCart, clearCart, calculateTotalPrice } from '../../features/cartSlice';
import styles from './Cart.module.scss';

const Cart = () => {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateTotalPrice());
    }, [cart, dispatch]);

    const removeFromCart = (book) => {
        dispatch(removeBookFromCart(book));
    };

    const increaseQuantity = (book) => {
        dispatch(increment(book));
    };

    const decreaseQuantity = (book) => {
        dispatch(decrement(book));
    };

    const clear = () => {
        dispatch(clearCart())
    };

  return (
    <div className={styles.cart}>
    { cart.data.length > 0 ? (
        <div>
        <ul>
            {cart.data.map(book => (            
                <li key={book.id}>
                    <div className={styles.cartBox}>
                    <div className={styles.aboutBook}>
                    <img src={book.image} alt={book.id} />
                        <div>
                            <h3>{book.name}</h3>
                            <p>{book.author}</p>
                            <button onClick={() => removeFromCart(book)}>Remove</button>
                        </div>
                    </div>
                    <div>
                    <div className={styles.priceBox}>
                        <h4>Price</h4>
                        <p>{book.price}</p>
                    </div>
                    </div>
                    <div className={styles.quantityBox}>
                        <h4>Quantity</h4>
                        <div className={styles.quantityBtnBox}>
                            <button onClick={() => decreaseQuantity(book)}>-</button> 
                            <p>{book.quantity}</p>                   
                            <button onClick={() => increaseQuantity(book)}>+</button>
                        </div>
                    </div>
                    <div className={styles.totalBox}>
                        <h4>Total</h4>
                        <p><b>{(book.price * book.quantity)}</b></p>
                    </div>
                    </div>
                </li>
            ))}
        </ul>
        </div>
    )
    : (
        <h1 style={{textAlign: 'center'}}>Cart is empty!!!</h1>
    )}
        <div className={styles.cartHandleBtns}>
            <button onClick={() => clear()}>Clear Cart</button>
            <h3>Total price: {cart.totalPrice}</h3>
        </div>
    </div>
  )
}

export default Cart