import * as APIUtil from '../util/todo_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

// Accepts array argument of todos
export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos
  }
}

// Receives a single todo
export const receiveTodo = (todo) => {

  return {
    type: RECEIVE_TODO,
    todo
  }
}

// either takes a single todo (with an id key) or an id
export const removeTodo = (id) => {
    return {
    type: REMOVE_TODO,
    id
  }
}

// Thunk action creator for fetchTodos
export const fetchTodos = () => {
  return (dispatch) => {
    return APIUtil.fetchTodos()
                  .then(todos => {
                    return dispatch(receiveTodos(todos));
                  });
  };
}

export const createTodo = (todo) => {
  return dispatch => {
    return APIUtil.createTodo(todo)
                  .then(
                    todo => {return dispatch(receiveTodo(todo))},
                    errors => {return dispatch(receiveErrors(errors.responseJSON))},
                  ).then(
                    () => {return dispatch(clearErrors())}
                  )
  }
};

export const updateTodo = (todo) => {
  return dispatch => {
    return APIUtil.updateTodo(todo)
                  .then(
                    todo => { return dispatch(receiveTodo(todo)) },
                    errors => { return dispatch(receiveErrors(errors.responseJSON)) },
                  ).then(
                    () => { return dispatch(clearErrors()) }
                  )
  }
}

export const deleteTodo = todo => {
  return dispatch => {
    return APIUtil.deleteTodo(todo)
                  .then(
                    todo => { return dispatch(removeTodo(todo.id)) },
                    errors => { return dispatch(receiveErrors(errors.responseJSON)) },
                  ).then(
                    () => { return dispatch(clearErrors()) }
                  )
  }
}