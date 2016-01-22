import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import FormBuilder from './formBuilder';
import loginForm from '../../forms/loginForm/loginForm';

expect.extend(expectJSX);

describe.only('formBuilder', () => {
  it('should render formField components', () => {
    const renderer = createRenderer();
    renderer.render(
      <FormBuilder config={ loginForm } />
    );
    const actual = renderer.getRenderOutput();
    const expected = (
      <FormField />
    );
    console.log(actual);
    expect(actual).toIncludeJSX(expected);
  })
});
