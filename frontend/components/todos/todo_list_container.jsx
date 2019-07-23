import { connect } from 'react-redux'
import TodoList from './todo_list'
import { allTodos } from '../../reducers/selectors'
import { receiveTodo, removeTodo, fetchTodos, createTodo } from '../../actions/todo_actions'

const mapStateToProps = (state) => {
  return {
    todos: allTodos(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveTodo: todo => dispatch(receiveTodo(todo)),
    removeTodo: id => dispatch(removeTodo(id)),
    fetchTodos: () => dispatch(fetchTodos()),
    createTodo: todo => dispatch(createTodo(todo)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);