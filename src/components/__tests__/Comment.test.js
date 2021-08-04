import React from 'react';
import { shallow } from 'enzyme';
import Comment from 'components/Comment/Comment';

describe('<Comment/>', () => {
  test('render author comment and comment text when passing on props', () => {
    const name = 'Tomek';
    const randomPost = 'Lorem ipsum dolor sit.';
    const wrapper = shallow(<Comment author={name} content={randomPost} />);

    expect(wrapper.find('h4').text()).toEqual(name);
    expect(wrapper.find('p').text()).toEqual(randomPost);
  });
});
