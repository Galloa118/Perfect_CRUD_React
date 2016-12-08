import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Icon from 'material-ui/svg-icons/maps/directions-run';
import Logo from './';

test('The Logo renders without errors', () => {
  shallow(<Logo />);
});

test('The Logo renders directions-run SVG icon from material-ui', () => {
  const wrapper = shallow(<Logo />);
  expect(wrapper.find(Icon).length).toBe(1);
});
