import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from "../actions/todo_actions";
import { merge } from 'lodash';

export default (state = {}, action) => {
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