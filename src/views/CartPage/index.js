import React from 'react';
import styles from './CartPage.module.scss';
import Cart from '../../components/Cart';

const CartPage = () => {
  return (
    <div className={styles.cartPage}>
        <Cart/>
    </div>
  )
}

export default CartPage