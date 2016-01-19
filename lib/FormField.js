import React from 'react'

class FormField extends React.Component {
	constructor() {
		super();
	}

	render() {
		let fieldConfig = this.props.fieldConfig;
		let messages;
		let hasMessages = typeof fieldConfig.messages !== 'undefined';
		let label = fieldConfig.label;
		let id = fieldConfig.attrs.id;

		if (hasMessages) {
			messages = fieldConfig
				.messages
				.map(
					message => <p className="danger">{ message }</p>
				);
		}

		return (
			<div className="form-group">
			  <label>{ label }</label>
			  <input
			    id={ id }
				  className="form-control" />
				  { messages }
			</div>
		)
	}
}

export default FormField
