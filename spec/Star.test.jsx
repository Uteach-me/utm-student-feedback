/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Star from '../client/components/Star';

describe('Star Component', () => {
  it('should render a svg', () => {
    const wrapper = shallow(<Star />);

    expect(wrapper.exists('svg')).toBe(true);
  });

  it('it should fill a default color', () => {
    const wrapper = shallow(<Star />);

    expect(wrapper.exists('[fill="#dedfe0"]')).toBe(true);
  });

  it('it should fill a highlighted color', () => {
    const wrapper = shallow(<Star highlighted />);

    expect(wrapper.exists('[fill="#f4c150"]')).toBe(true);
  });
});
