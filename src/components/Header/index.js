import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
    <nav>
    <ul>
        <li>
            <Link
                to='/'                        
            >
                Home
            </Link>
        </li>
        <li>
        <Link
        to='/booklist'                        
    >
        Book List
    </Link>
        </li>
        <li>
        <Link
        to='/cart'                        
    >
        My Cart
    </Link>
        </li>
    </ul>
</nav>
    </header>
  )
}

export default Header