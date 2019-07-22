import React from 'react';
import TodoListItem from './todo_list_items';
import TodoForm from './todo_form';

class TodoList extends React.Component{

  render(){
    return (
      <>
        <ul>
          {this.props.todos.map((todo, i) => <TodoListItem key={i} todo={todo} receiveTodo={this.props.receiveTodo} removeTodo={this.props.removeTodo}/>)}
        </ul>
        <TodoForm receiveTodo={this.props.receiveTodo}/>
      </>
    )
  }
}
export default TodoList;


