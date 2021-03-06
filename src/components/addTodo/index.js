import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ submitTodo, undeleteTodo, inputChanged, disableAddTodo, disableUndelete }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submitTodo(input.value);
          input.value = '';
        }}
      >

        <input
          className="todo-input"
          ref={(element) => {
            input = element;
          }}
          placeholder="I want to do..."
          onChange={() => inputChanged(input.value)}
        />

        <button
          type="submit"
          className="todo-submit"
          disabled={disableAddTodo}
          >
          Add Todo
        </button>

        <button
          type="button"
          className="todo-undelete"
          onClick={undeleteTodo}
          disabled={disableUndelete}
        >
          Undelete
        </button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  undeleteTodo: PropTypes.func.isRequired,
  inputChanged: PropTypes.func.isRequired,
  disableAddTodo: PropTypes.bool.isRequired,
  disableUndelete: PropTypes.bool.isRequired,
};

export default AddTodo;
