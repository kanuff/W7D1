import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const todoState = Object.assign({}, this.state);
    this.props.createTodo(todoState)
              .then(()=>{
                this.setState({ title: "", body: ""});
              });
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