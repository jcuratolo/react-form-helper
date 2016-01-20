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
    let target = event.target.id; // Id of element that changed
    let value = event.target.value; // Value of changed element
    let newState = {};

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
    return this.state[elementId] || undefined;
  }

  /**
   * Call each form field's validators with their currently stored value
   */
  validateForm() {
    // make a working copy of current state
    let newState = Object.assign({}, this.state);

    this
      .state
      .formConfig
      .fields
      .forEach((field, fieldIndex) => {
        let hasValidators = Array.isArray(field.validators);

        if (hasValidators) {
          // Call each validator with the field's value
          field.validators.forEach(validator => {
            let currentValue = this.getFieldValue(field.attrs.id);
            let isFieldValid = validator.fn(currentValue);
            let isFieldInvalid = !isFieldValid;
            let currentField = newState.formConfig.fields[fieldIndex];
            let messageIndex;
            let hasMessage;

            // This may be the first time adding messages
            currentField.messages = currentField.messages || [];

            messageIndex =
              currentField
                .messages
                .findIndex(msg => msg === validator.msg)

            hasMessage = messageIndex !== -1;

            if (isFieldValid && hasMessage) {
              // Remove message if valid and present
              currentField.messages.splice(messageIndex, 1);
            } else if (isFieldInvalid && !hasMessage) {
              // Add message if not present
                currentField.messages.push(validator.msg);
            }

            // Fold in new state
            this.setState(newState);
          })
        }
      });
  }

  render() {
    let formFields =
      this
        .props
        .formConfig
        .fields
        .map(
          (field, index) => <FormField fieldConfig={ field } key={ index } />
        );

    return (
      <form onChange={this.handleChange.bind(this)}>
        { formFields }
      </form>
    )
  }
}

export default FormBuilder;
