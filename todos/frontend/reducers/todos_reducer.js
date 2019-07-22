import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from "../actions/todo_actions";
import { merge } from 'lodash';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

export default (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODOS: {
      const newState = {};
      action.todos.forEach((todo) => {
        newState[todo.id] = todo;
      })
      return newState;
    }
    case RECEIVE_TODO: {
      return merge({}, state, { [action.todo.id]: action.todo})
    }
    case REMOVE_TODO: {
      const newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    }
    default:
      return state;
  }
}