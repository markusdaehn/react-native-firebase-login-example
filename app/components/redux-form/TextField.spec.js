import 'react-native';
import React from 'react';
import TextField from './TextField';
import { shallow } from 'enzyme';

describe('TextField', function () {
  let text;
  describe('when rendered with no props', function () {
    beforeEach(function () {
      text = shallow(<TextField />)
    });

    it('should render correctly with default props', function () {
      expect(text).toMatchSnapshot();
    });
  });
  describe('when rendered with name and placeholder properties set', function () {
    beforeEach(function () {
      text = shallow(<TextField name='text-field-name' placeholder='text-field-placeholder'  />)
    });
    it('should render correctly with name and placeholder set to passed in props', function () {
      expect(text).toMatchSnapshot();
    });
  });
});
