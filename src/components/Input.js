import React from 'react';

import styles from '../styles/Input.scss';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }

    this.textInput = React.createRef();
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });

    this.props.onInputChange(event);
  }

  handleSubmit(event) {
    this.setState({
      value: event.target.value,
    });

    this.textInput.current.value = '';
    this.textInput.current.focus();
    this.props.onInputSubmit();
  }

  handleKeyUp(event) {
    if(event.keyCode !== 13) {
      return;
    }

    this.handleSubmit(event);
  }

  render() {

    const { value } = this.state;
    const { placeholder } = this.props;

    return(
      <div>
        <div className={styles['text-input']}>
          <input 
            type='text' 
            ref={this.textInput}
            onChange={(e) => this.handleChange(e)}
            onKeyUp={(e) => this.handleKeyUp(e)}
            placeholder={placeholder}
            autoFocus
          />
        </div>
        <div className={styles['submit-input']}>
          <input 
            type='submit' 
            onClick={(e) => this.handleSubmit(e)}
          />
        </div>
      </div>
    )
  }
}

Input.displayName = 'Input';

export default Input;