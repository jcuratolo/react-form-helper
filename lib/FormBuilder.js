import React from 'react';
import FormGroup from './FormGroup';

class FormBuilder extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let formConfig = this.props.formConfig.fields;
    let formNodes = formConfig.map((field, index) => {
      let tag = field.tag;
      let label = field.label;
      let attrs = field.attrs;

      return React.createElement(
        'div', { className: 'form-group', key: index },
        React.createElement('label', { htmlFor: attrs.id }, label),
        React.createElement(tag, attrs)
      );
    });

    return <form>
      { formNodes }
    </form>
  }
}

export default FormBuilder; 
