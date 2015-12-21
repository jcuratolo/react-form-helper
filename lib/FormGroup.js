import React from 'react';

class FormGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-group">{props.children}</div>
    )
  }
}

export default FormGroup
