import 'react-native';
import React from 'react';
import PasswordField from './PasswordField';
import { shallow } from 'enzyme';

describe('PasswordField', function () {
  let password;
  describe('when rendered with no props', function () {
    beforeEach(function () {
      password = shallow(<PasswordField />)
    });

    it('should render correctly with default props', function () {
      expect(password).toMatchSnapshot();
    });
  });
  describe('when rendered with name and placeholder properties set', function () {
    beforeEach(function () {
      password = shallow(<PasswordField name='password-field-name' placeholder='password-field-placeholder'  />)
    });
    it('should render correctly with name and placeholder set to passed in props', function () {
      expect(password).toMatchSnapshot();
    });
  });
});
