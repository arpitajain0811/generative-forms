import React, { Component } from 'react';
import Proptypes from 'prop-types';
// import NumberFormat from 'react-number-format';
// import stringToBool from '../../utils/common';

export default class NumberInput extends Component {
//   onValueChange = values => {
//     const { formattedValue, value } = values;
//     this.props.onChange(formattedValue, value);
//   };
//   customStyle = {
//     outline: 'none',
//     fontSize: '28px',
//     fontFamily: 'PoppinsRegular',
//     color: '#333',
//     width: '100%',
//   };
  render() {
    // const { currencyPrefix, commaFormatting, decimalScale, allowNegative } = this.props;
    return (
      <div>
        {/* <div
          className={
            errorText === ''
              ? styles['number-input-field']
              : styles['number-input-invalid-field']
          }
        > */}
          {/* <NumberFormat
            thousandSeparator={commaFormatting}
            prefix={currencyPrefix}
            fixedDecimalScale
            decimalScale={Number(decimalScale)}
            allowNegative={stringToBool(allowNegative)}
          /> */}
          {/* <div className={styles['number-input-label']}>
            <div className={styles['number-input-label-text']}>{label}</div>
            {errorText && (
              <img
                className={styles['number-input-error-icon']}
                src={errorIcon}
                alt=""
              />
            )}
          </div> */}
        </div>
        // {this.props.errorText !== '' ? (
        //   <p className={styles['error-text']}>{errorText}</p>
        // ) : null}
    //   </div>
    );
  }
}

NumberInput.propTypes = {
  commaFormatting: Proptypes.bool,
  currencyPrefix: Proptypes.string,
  decimalScale: Proptypes.number,
  allowNegative: Proptypes.bool
};
NumberInput.defaultProps = {
  commaFormatting: 'false',
  currencyPrefix: '',
  decimalScale: '2',
  allowNegative: 'false'
};
