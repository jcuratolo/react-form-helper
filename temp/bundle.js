'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CoolComponent = function CoolComponent(_ref) {
  var greeting = _ref.greeting;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Greetings'
    ),
    _react2.default.createElement(
      'h1',
      null,
      greeting
    )
  );
};

describe.only('CoolComponent', function () {
  it('should...', function () {
    var renderer = _reactAddonsTestUtils2.default.createRenderer();
    renderer.render(_react2.default.createElement(CoolComponent, { greeting: 'hello world' }));
    var output = renderer.getRenderOutput();
    console.log(output);
  });
});
'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _formConfig = require('./formConfig.js');

var _formConfig2 = _interopRequireDefault(_formConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CreateFormConfig', function () {
  describe('should validate the parameter', function () {
    it('ensures the fields property is defined', function () {
      var withoutFields = {
        name: 'MyForm',
        validateForm: function validateForm() {}
      };

      (0, _expect2.default)(_formConfig2.default).withArgs(withoutFields).toThrow();
    });

    it('ensures the name property is defined', function () {
      var withoutName = {
        validateForm: function validateForm() {},
        fields: []
      };

      (0, _expect2.default)(_formConfig2.default).withArgs(withoutName).toThrow();
    });

    it('ensures the validateForm property is defined', function () {
      var withoutValidateForm = {
        name: 'MyForm',
        fields: []
      };

      (0, _expect2.default)(_formConfig2.default).withArgs(withoutValidateForm).toThrow();
    });
  });
});
