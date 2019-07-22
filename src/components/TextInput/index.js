import React, { Component } from 'react';
import Proptypes from 'prop-types';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.question.answer,
    };
  }
  onChange = (input) => {
    let value = input.target.value;
    if (this.props.question.regex) {
      if (!Array.isArray(value.match(this.props.question.regex))) {
        while (!Array.isArray(value.match(this.props.question.regex))) {
          value = value.slice(0, -1);
        }
      }
    }
    this.setState({
      value,
    })
  }

  render() {
    const { questionText, placeholder, regex } = this.props.question;
    return (
      <div >
        <div>{questionText}</div>
        <input
          type="text"
          pattern={regex}
          placeholder={placeholder}
          onChange={(e) => this.onChange(e)}
          value={this.state.value}
        />
        {/* {this.state.showError ? (
          <p className={styles.textError}>{question.errorMessage}</p>
        ) : null} */}
      </div>
    );
  }
}

TextInput.propTypes = {
  question: Proptypes.object,
};