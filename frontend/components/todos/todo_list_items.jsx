import React from 'react'
import TodoDetailView from './todo_detail_view';

class TodoListItem extends React.Component{

  constructor(props) {
    super(props);
    this.toggleDone = this.toggleDone.bind(this);
    this.buttonStatus = this.buttonStatus.bind(this);
    this.state = {
      detail: false,
      steps: this.props.fetchSteps(this)
    }
    this.toggleDetail = this.toggleDetail.bind(this)
    this.showDetail = this.showDetail.bind(this)
    this.renderList = this.renderList.bind(this)
  }

  toggleDone() {
    const newTodo = Object.assign({}, this.props.todo);
    newTodo.done = !newTodo.done;
    this.props.updateTodo(newTodo);
  }

  buttonStatus(){
    if (this.props.todo.done){
      return "Undo"
    }
    return "Done"
  }

  toggleDetail(){
    this.setState({detail: !this.state.detail})
  }

  renderList(){
    return (
      <li>
        <a onClick={this.toggleDetail}>{this.props.todo.title}</a>
        <button onClick={this.toggleDone}>{this.buttonStatus()}</button>
      </li>
    )
  }

  showDetail(){
    if (this.detail){
      return (
        <>
        {this.renderList()}
        </>
      );
    } else {
      return (
        this.renderList()
      )
    }
  }


  render(){
    return (
      this.showDetail()
    )
  }
}

export default TodoListItem;