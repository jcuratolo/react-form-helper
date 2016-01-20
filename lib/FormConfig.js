import val from 'validator'

let FormConfig = {
  top: this;
  fields: [
    {
      tag: 'input',
      label: 'Username',
      attrs: {
        type: 'text',
        className: 'form-control',
        id: 'usernameInput'
      },
      validators: [
        {
          msg: 'This field must be alphanumeric',
          fn: val.isAlpha
        }
      ]
    },
    {
      tag: 'input',
      label: 'Password',
      attrs: {
        className: 'form-control',
        id: 'passwordInput'
      },
      validators: [
        {
          msg: 'Passwords must match',
          fn: function isSamePassword() {
            console.log(this);
            debugger;
          }
        }
      ]
    },
    {
      tag: 'input',
      label: 'Confirm Password',
      attrs: {
        type: 'text',
        className: 'form-control',
        id: 'confirmPasswordInput'
      }
    }
  ]
}

export default FormConfig;
