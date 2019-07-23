import React from 'react';

class TodoDetailView extends React.Component{
  // props has thunk action dispatch shiza and also the todo
  constructor(props) {
    super(props)
    this.props.fetchSteps(props.todo).then(steps => this.state = {steps})
  }

  buttonStatus(step) {
    if (step.done) {
      return "Undo"
    }
    return "Done"
  }

  deleteStepFromState(step) {

  }

  render(){
    return (
      <ul>
        {this.props.state.steps.map( (step, idx) => {
          <li key={idx}>
            {step.title}
            <button onClick={}>{this.buttonStatus(step)}</button>
            <button onClick={this.props.deleteStep(step)}>Delete</button>
          </li>
        })}
      </ul>
      <button onClick={this.props.removeTodo}>Remove Todo</button>
    );
    }

}

export default TodoDetailView;