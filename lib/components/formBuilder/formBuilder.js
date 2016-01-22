import React from 'react';
import FormGroup from '../formGroup/formGroup';
import FormField from '../formField/formField';
import loginForm from '../../forms/loginForm/loginForm';
import formConfig from '../../utils/formConfig';

export default class FormBuilder extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('config is:', this.props.config);
    const form = formConfig(this.props.config);
    this.setState({form: form});
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

    });
  }

  /**
   * Extract form field's value from the state
   */
  getFieldValue(elementId) {
    return this.state[elementId] || undefined;
  }

  render() {
    let formFields =
      this.state.form.fields.map(
        (field, index) => <FormField field={ field } key={ index } />
      );

    return (
      <form onChange={this.handleChange.bind(this)}>
        { formFields }
      </form>
    );
  }
}
