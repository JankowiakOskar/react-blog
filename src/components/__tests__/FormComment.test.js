/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import FormComment from '../FormComment/FormComment';

describe('<FormComment/>', () => {
  let wrapper;
  let testState;
  beforeEach(() => {
    testState = {
      author: '',
      comment: '',
      error: null,
      isDisabled: false,
      isSubmitting: false,
    };

    const mockSetCommentFn = (e) =>
      jest.fn(() => {
        testState.comment = e.target;
      });

    wrapper = shallow(
      <FormComment
        onSubmit={() => {
          testState.isSubmitting = !testState.isSubmitting;
        }}
        setComment={mockSetCommentFn}
        setAuthor={(e) => {
          testState[e.target.name] = e.target.value;
        }}
        author={testState.author}
        isDisabled={testState.isDisabled}
        isSubmitting={testState.isSubmitting}
      />,
    );
  });

  it('should render message during submitting form', () => {
    wrapper.find('form').simulate('submit');
    expect(testState.isSubmitting).toBeTruthy();
  });

  it('should set author name when name has been typed into author input', () => {
    const authorInput = wrapper.find('#author-comment');

    authorInput.simulate('change', {
      target: { name: 'author', value: 'Oskar' },
    });

    expect(testState.author).toEqual('Oskar');
  });

  it('should render error if passed by props', () => {
    const errorMsg = 'Oups we got an error';
    wrapper.setProps({ error: errorMsg });
    expect(wrapper.find('#comment-error').text()).toEqual(`${errorMsg}!`);
  });
});
