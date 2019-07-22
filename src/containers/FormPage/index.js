import React, { Component } from 'react';
import propTypes from 'prop-types';
import FormSection from '../../components/FormSection';

export class FormPage extends Component {
  render() {
    const { formConfig } = this.props;
    return (
      <div>
        <div>{formConfig.formHeading}</div>
        <div>{formConfig.formSubheading}</div>
        <FormSection
          questions={formConfig.questions}
        />
      </div>
    );
  }
}

FormPage.propTypes = {
    formConfig: propTypes.object
};


export default FormPage;