import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { updateTodo, deleteTodo, fetchTodos, createTodo } from '../../actions/todo_actions';

const mapStateToProps = (state) => {
  return {
    todos: allTodos(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodos: () => dispatch(fetchTodos()),
    createTodo: todo => dispatch(createTodo(todo)),
    updateTodo: todo => dispatch(updateTodo(todo)),
    deleteTodo: todo => dispatch(deleteTodo(todo)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);