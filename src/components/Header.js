import React from 'react';

import styles from '../styles/Header.scss';

const Header = () => {
  return (
    <div className={styles['header']}>
      <h1>Ethereum ENS Namehash Calculator</h1>
    </div>
  )
}

Header.displayName = 'Header';

export default Header;