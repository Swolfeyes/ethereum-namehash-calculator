import React from 'react';

import styles from '../styles/Textbox.scss';

const TextBox = ({ result }) => {
  return (
    <div className={styles['text-box']}>
      <span>{result}</span>
    </div>
  )
}

TextBox.displayName = 'TextBox';

export default TextBox;