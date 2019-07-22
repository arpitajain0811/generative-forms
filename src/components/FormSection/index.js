import React, {Component} from 'react';
import { map } from 'lodash';
import propTypes from 'prop-types';
import componentMapper from '../../componentMapper';

export class FormSection extends Component  {
//   componentWillReceiveProps(nextProps){
//     if(this.props.initialState!==nextProps.initialState){
//       this.props.initialize(nextProps.initialState)
//     }
//   }
  render(){
    const { questions } = this.props;
    return (
      <form>
        {renderQuestions(questions)}
      </form>
    )
  }
};

const renderQuestions = (questions) => {
//   if (questions === undefined || isEmpty(questions)) {
//     return <div></div>
//   }
  return <div>
    {
      map(questions, (question) => {
        const Comp = componentMapper[question.modelName];
        return(
        <div key={question.itemName}>
            <Comp question={question}/>
        </div>
      )})
    }
  </div>
};
export default FormSection;

FormSection.propTypes = {
  questions: propTypes.array,
};
