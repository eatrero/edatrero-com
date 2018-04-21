import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';

describe('Home', () => {
  it('should have 2 social links', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('.social-icon').length).toBe(2);
  });
});
