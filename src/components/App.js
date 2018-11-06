import React from 'react';

import Header from './Header.js';
import Input from './Input.js';
import TextBox from './TextBox.js';

import styles from '../styles/App.scss';

const namehash = require('eth-ens-namehash');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      result: '',
    }
  }

  handleInputChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  handleInputSubmit() {
    this.setState({
      result: namehash.hash(this.state.inputValue),
    });
  }

  render() {

    const { inputValue, result } = this.state;

    return(
      <div className={styles['app']}>
        <Header />
        <Input 
          onInputChange={(e) => this.handleInputChange(e)}
          onInputSubmit={() => this.handleInputSubmit()}
          placeholder='Insert domain'
        />
        <TextBox result={result}/>
      </div>
    )
  }
}

App.displayName = 'App';

export default App;