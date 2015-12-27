import React from 'react';
import FormGroup from './FormGroup';
import FormField from './FormField';

class FormBuilder extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({formConfig: this.props.formConfig})
  }

  handleChange(event) {
    console.log('form was changed')

    var target = event.target.id;
    var value = event.target.value;
    var newState = {};

    newState[target] = value;

    this.setState(newState, function() {
      console.log('form state:', this.state);
      this.runValidators();
    });


    console.log('all validators ran.')
  }

  getFieldValue(elementId) {
    return this.state[elementId] || undefined
  }

  runValidators() {
    let newState = Object.assign({}, this.state);

    console.log('running validators...')

    this.state.formConfig.fields.forEach((field, fieldIndex) => {
      // Field has validators defined as an array
      if (field.validators && field.validators.length) {
        // Call each validator with the field's value
        field.validators.forEach(validator => {
          let value = this.getFieldValue(field.attrs.id);
          // the result of running the validator with the field's value
          let isValid = validator.fn(value);
          let currentField = newState.formConfig.fields[fieldIndex];
          currentField.messages = currentField.messages || [];
          let messageIndex =
            currentField.messages.findIndex(msg => msg === validator.msg)
          let hasMessage = messageIndex !== -1;
          
          if (isValid) {
            // Remove message if present
            if (hasMessage) {
              currentField.messages.splice(messageIndex, 1);
            }
          } else {
            // Add message if not present
            if (!hasMessage) {
              currentField.messages.push(validator.msg);
            }
          }

          this.setState(newState);
        })
      }
    });
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
