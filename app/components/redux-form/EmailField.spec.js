import 'react-native';
import React from 'react';
import EmailField from './EmailField';
import { shallow } from 'enzyme';

describe('EmailField', function () {
  let email;
  describe('when rendered with no props', function () {
    beforeEach(function () {
      email = shallow(<EmailField />)
    });

    it('should match snapshot with default props', function () {
      expect(email).toMatchSnapshot();
    });
  });
  describe('when rendered with name and placeholder properties set', function () {
    beforeEach(function () {
      email = shallow(<EmailField name='email-field-name' placeholder='email-field-placeholder'  />)
    });

    it('should match snapshot with name and placeholder set to passed in props', function () {
      expect(email).toMatchSnapshot();
    });
  });
});
