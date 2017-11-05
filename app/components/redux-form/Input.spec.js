import 'react-native';
import React from 'react';
import Input from './Input';
import { shallow, mount } from 'enzyme';

describe('Input', function () {
  let ev = {target: {value: 'new value'}};
  let input, value, inputWrapper;

  beforeEach(function () {
    value = 'The value';
    input = {
      onChange: jest.fn(),
      onBlur: jest.fn(),
      onFocus: jest.fn(),
      value,
    };
  });
  describe('when rendered', function () {
    beforeEach(function () {
      inputWrapper = shallow(<Input input={input} a='a' b='b'/>);
    });
    it('should render correctly', function () {
      expect(inputWrapper).toMatchSnapshot();
    });
    describe('and when the text is changed', function () {
      beforeEach(function () {
        inputWrapper.find('FormInput').simulate('change', ev);
      });
      it('should call the input.onChange() method with the expected event data', function () {
        expect(input.onChange).toBeCalledWith(ev);
      });
    });
    describe('and when input is navigated away', function () {
      beforeEach(function () {
        inputWrapper.find('FormInput').simulate('blur', {target: {value: 'new value'}});
      });
      it('should call the input.onBlur() method', function () {
        expect(input.onBlur).toBeCalled();
      });
    });
    describe('and when input gains focus', function () {
      beforeEach(function () {
        inputWrapper.find('FormInput').simulate('focus', {target: {value: 'new value'}});
      });
      it('should call the input.onFocus() method', function () {
        expect(input.onFocus).toBeCalled();
      });
    });
  });
});
