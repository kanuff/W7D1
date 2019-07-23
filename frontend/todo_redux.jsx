import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodo, receiveTodos, fetchTodos } from './actions/todo_actions';
import App from './components/app';
import Root from './components/root';
import { allTodos } from './reducers/selectors';

document.addEventListener("DOMContentLoaded", () => {

  // Things on window for testing
  window.store = configureStore();
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.fetchTodos = fetchTodos;
  window.allTodos = allTodos;
  const rootElement = document.getElementById('content');
  ReactDOM.render(<Root store={store}/>, rootElement);
})
