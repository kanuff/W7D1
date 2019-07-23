// import React from 'react';

// class TodoDetailView extends React.Component{
//   constructor(props){
//     super(props)
//     this.removeTodo = this.removeTodo.bind(this);
//   }

//   removeTodo() {
//     this.props.removeTodo(this.props.todo.id);
//   }

//   render(){
//     return (
//       <ul>
//         {this.props.todo.steps.map( (step, idx) => {
//           <li className="step" key={idx}>
//             <p>{step.title}-</p>
//             <p>{step.done}</p>
//             <button>Remove</button>
//             <button>Change status</button>
//           </li>
//         })}
//       </ul>
//       <button onClick={this.props.removeTodo}>Remove Todo</button>
//     );
//     }

// }

// export default TodoDetailView;