import React from 'react';
import TodoListItem from './todo_list_items';
import TodoForm from './todo_form';

class TodoList extends React.Component{

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <>
        <ul>
          {this.props.todos.map((todo, i) => <TodoListItem key={i} todo={todo} updateTodo={this.props.updateTodo} deleteTodo={this.props.deleteTodo}/>)}
        </ul>
        <TodoForm createTodo={this.props.createTodo}/>
      </>
    )
  }
}
export default TodoList;


