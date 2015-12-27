import React from 'react'
import FormBuilder from './FormBuilder'
import FormConfig from './FormConfig'

class App extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return <div className="container">
    <div className="row">
    <div className="col-sm-6">
      <FormBuilder formConfig={FormConfig} />
    </div>
    </div></div>
  }
}

export default App
