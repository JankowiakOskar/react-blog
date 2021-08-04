/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { mount } from 'enzyme';
import store from 'store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import FormCommentControl from 'containers/FormCommentControl/FormCommentControl';

describe('<FormCommentControl/>', () => {
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <FormCommentControl />
      </MemoryRouter>
    </Provider>,
  );
  it('Should render proper author on change value', () => {
    wrapper.find('#author-comment').simulate('change', {
      target: {
        value: 'Piotrek',
      },
    });
    expect(wrapper.find('#author-comment').prop('value')).toEqual('Piotrek');
  });
});
