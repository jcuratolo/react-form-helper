import React from 'react';
import FormGroup from './FormGroup';
import FormField from './FormField';

class FormBuilder extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleChange() {
    console.log('form was changed')
    this.props.formConfig.fields.forEach(function(field) {
      if (field.validators && field.validators.length) {
        field.validators.forEach(validator => {
          console.log('running validator');
          validator()
        })
      }
    });
    console.log('all validators ran.')
  }

  runValidators() {
    console.log('running validators...')
    // let formFields = this props.formConfig.fields;
    // let allValidators = formFields.map(eachField => {
    //   return eachField.validators
    // });
    // let isValid = allValidators.every(validator => {
    //   return validator()
    // })
  }

  render() {
    let formFields = this.props.formConfig.fields.map((field, index) => {
      return <FormField fieldConfig={field} key={index} changeHandler={this.handleChange} />
    });

    return <form onChange={this.handleChange.bind(this)}>{ formFields }</form>
  }
}

export default FormBuilder; 
