import React from 'react';
import FormPage from '../src/containers/FormPage';
import formConfig from './sample.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <FormPage formConfig={formConfig}/>
    </div>
  );
}

export default App;
