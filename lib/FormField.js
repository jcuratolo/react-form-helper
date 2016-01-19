import React from 'react'

class FormField extends React.Component {
	constructor() {
		super();
	}

	render() {
		let messages;
		console.log('Form field rendering');
		if (this.props.fieldConfig.messages) {
			messages = this.props.fieldConfig.messages.map(
				message => <p className="danger">{message}</p>
			);
		}

		return (
			<div className="form-group">
			 <label>{this.props.fieldConfig.label}</label>
			 <input
			  id={this.props.fieldConfig.attrs.id}
				className="form-control" />
				{ messages }
			</div>
		)
	}
}

export default FormField
