/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { mount } from 'enzyme';
import store from 'store';
import * as redux from 'react-redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import FormCommentControl from 'containers/FormCommentControl/FormCommentControl';

describe('<FormCommentControl/>', () => {
  const useSelectorSpy = jest.spyOn(redux, 'useSelector');
  // const mockSelectorFc = (state) => jest.fn(() => state);

  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <FormCommentControl />
      </MemoryRouter>
    </Provider>,
  );
  beforeEach(() => {
    useSelectorSpy.mockClear();
  });

  it('Should render proper author on change value', () => {
    wrapper.find('#author-comment').simulate('change', {
      target: {
        value: 'Piotrek',
      },
    });
    expect(wrapper.find('#author-comment').prop('value')).toEqual('Piotrek');
  });
});
