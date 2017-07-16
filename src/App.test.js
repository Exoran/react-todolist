/* global it, expect */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


/*describe('TodoList App', () => {
  it('Should load with the right title', () => {
    expect(actualTitle).to.eql('Todo List');
  });

  it('Should allow me to create a Todo', () => {
    const todoText = 'Get better at testing';

    expect(actual).to.equal(todoText);
  });
});*/
