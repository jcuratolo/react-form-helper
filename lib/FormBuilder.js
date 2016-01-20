import React from 'react';
import FormGroup from './FormGroup';
import FormField from './FormField';

class FormBuilder extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({formConfig: this.props.formConfig});
  }
  
  /**
   *  Handle user input at the form level as opposed to each field individually
   */
  handleChange(event) {
    var target = event.target.id; // Id of changed element
    var value = event.target.value; // Value of changed element
    var newState = {};

    newState[target] = value; // Store value keyed by element's ID

    this.setState(newState, function() {
      console.log('form state:', this.state);
      this.validateForm();
    });
  }

  /**
   * Extract form field's value from the state
   */
  getFieldValue(elementId) {
    return this.state[elementId] || undefined
  }

  /**
   * Call each form field's validators with their currently stored value
   */
  validateForm() {
    // make a working copy of current state
    let newState = Object.assign({}, this.state);


    this.state.formConfig.fields.forEach((field, fieldIndex) => {
      let hasValidators = Array.isArray(field.validators);

      if (hasValidators) {
        // Call each validator with the field's value
        field.validators.forEach(validator => {
          // Lookup field value in state by id
          let value = this.getFieldValue(field.attrs.id);
          // Apply validator to form field value
          let isValid = validator.fn(value);
          // Get a ref to the field value we are interested in
          let currentField = newState.formConfig.fields[fieldIndex];
          currentField.messages = currentField.messages || [];
          // Check if the field already has the validator's message
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

          // Fold in new state
          this.setState(newState);
        })
      }
    });
  }

  render() {
    let formFields = this.props.formConfig.fields.map(
      (field, index) => <FormField fieldConfig={field} key={index} />
    );

    return <form onChange={this.handleChange.bind(this)}>{ formFields }</form>
  }
}

export default FormBuilder;
