import val from 'validator'

let FormConfig = {
  fields: [
    {
      tag: 'input',
      label: 'Enter Some Text',
      attrs: {
        type: 'text',
        className: 'form-control',
        id: 'helloDerpInput'
      },
      validators: [
        val.isAlpha,
        function(input) {
          return val.isLength(input, 3)
        }
      ]
    },
    
    {
      tag: 'textarea',
      label: 'Enter Some Text',
      attrs: {
        className: 'form-control',
        id: 'helloDerpInput1'
      },
      validators: []
    },
    {
      tag: 'input',
      label: 'Enter Some Text',
      attrs: {
        type: 'text',
        className: 'form-control',
        id: 'helloDerpInput2'
      }
    }
  ]
}

export default FormConfig;
