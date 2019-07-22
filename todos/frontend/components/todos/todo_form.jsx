import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const todoState = Object.assign({}, this.state);
    todoState.id = new Date().getTime();
    this.props.receiveTodo(todoState);
    this.setState({title: "", body: "", done: false});
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <label>
          Title
          <input
           type="text"
           onChange={this.update("title")}
           value={this.state.title}
           />
        </label>
        <label>
          Body
          <textarea
            onChange={this.update("body")}
            value={this.state.body}>
          </textarea>
        </label>
        <input type="submit" value="Add New Item" />
      </form>
    )
  }
}

export default TodoForm;