import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

const CoolComponent = ({greeting}) => {
  return (
    <div>
      <h1>Greetings</h1>
      <h1>{ greeting }</h1>
    </div>
  );
}

describe.only('CoolComponent', () => {
  it('should say the correct greeting', ()=>{
    const renderer = TestUtils.createRenderer();
    renderer.render(<CoolComponent greeting='hello world' />);
    const actual = renderer.getRenderOutput();
    const expected = (
        <h1>hello world</h1>
    );
    expect(actual).toIncludeJSX(expected);
  });
});
