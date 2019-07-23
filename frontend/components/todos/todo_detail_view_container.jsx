import { connect } from 'react-redux';
import { fetchSteps, createStep, deleteStep } from '../../actions/step_actions';
import TodoDetailView from './todo_detail_view';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSteps: todo => dispatch(fetchSteps(todo)),
    createStep: (todo, step) => dispatch(createStep(todo, step)),
    deleteStep: step => dispatch(deleteStep(step))
  }
}

export default connect(null, mapDispatchToProps)(TodoDetailView);