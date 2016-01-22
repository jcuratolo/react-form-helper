import val from 'validator';

function validate() {}

var FormConfig = {
  name: 'LoginForm',
  fields: [
    {
      tag: 'input',
      position: 0,
      attrs: {
        type: 'text',
        className: 'form-control'
      }
    },
    {
      tag: 'input',
      position: 1,
      attrs: {
        type: 'text',
        className: 'form-control'
      }
    }
  ],
  validateForm: validate
};

export default FormConfig;
