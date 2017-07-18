/* global it, expect, jest */

import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { initialState } from './reducers/';

it('App renders without crashing', () => {
  const mockFunction = jest.fn();

  const component = shallow(
    <App
      state={initialState}
      submitTodo={mockFunction}
      todo={[]}
      undeleteTodo={mockFunction}
      inputChanged={mockFunction}
      disableAddTodo
      disableUndelete
    />,
  );

  expect(component.exists()).toEqual(true);
});
