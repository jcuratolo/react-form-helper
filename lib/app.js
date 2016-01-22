import React from 'react';
import FormBuilder from './components/formBuilder/formBuilder';
import FormConfig from './utils/formConfig';
import loginForm from './forms/loginForm/loginForm';

class App extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return <div className="container">
    <div className="row">
    <div className="col-sm-6">
      <FormBuilder config={ loginForm } />
    </div>
    </div></div>
  }
}

export default App
