import React from 'react';
import FormGroup from './FormGroup';
import FormField from './FormField';

class FormBuilder extends React.Component {
  constructor(props) {
    super(props);
    //this.setState({})
  }

  handleChange(event) {
    console.log('form was changed')

    var target = event.target.id;
    var value = event.target.value;
    var newState = {};

    newState[target] = value;

    this.setState(newState, function() {
      console.log('state:', this.state);
    });

    this.props.formConfig.fields.forEach(function(field) {
      // Field has validators defined as an array
      if (field.validators && field.validators.length) {
        // Call each validator
        field.validators.forEach(validator => {
          console.log('running validator');
          // validator()
        })
      }
    });
    console.log('all validators ran.')
  }

  runValidators() {
    console.log('running validators...')
  }

  render() {
    let formFields = this.props.formConfig.fields.map((field, index) => {
      return (
        <FormField
          fieldConfig={field}
          key={index} />
      )
    });

    return <form onChange={this.handleChange.bind(this)}>{ formFields }</form>
  }
}

export default FormBuilder;
