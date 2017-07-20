import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodo from './components/addTodo/';
import TodoList from './components/todoList';
import actions from './actions/';
import './App.css'

export const App = ({
  submitTodo,
  todos,
  deleteTodo,
  undeleteTodo,
  inputChanged,
  disableUndelete,
  disableAddTodo
}) => (
  <div className="container">
    <h1>Todo list</h1>
    <AddTodo submitTodo={submitTodo} undeleteTodo={undeleteTodo} inputChanged={inputChanged} disableAddTodo={disableAddTodo} disableUndelete={disableUndelete}/>
    <TodoList todos={todos} deleteTodo={deleteTodo} />
  </div>
);

App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  undeleteTodo: PropTypes.func.isRequired,
  inputChanged: PropTypes.func.isRequired,
  disableAddTodo: PropTypes.bool.isRequired,
  disableUndelete: PropTypes.bool.isRequired,
};

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
  submitTodo: (text) => {
    if (text) {
      dispatch(actions.submitTodo(text));
    }
  },

  undeleteTodo: () => {
    dispatch(actions.undeleteTodo());
  },

  deleteTodo: (id) => {
    dispatch(actions.deleteTodo(id));
  },

  inputChanged: (text) => {
    dispatch(actions.inputChanged(text));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
