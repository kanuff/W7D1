import * as APIUtil from '../util/todo_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_STEP = 'RECEIVE_STEP'
export const RECEIVE_STEPS = 'RECEIVE_STEPS'
export const REMOVE_STEP = 'REMOVE_STEP'


export const receiveSteps = (steps) => {
  return ({
    type: RECEIVE_STEPS,
    steps
  })
}

export const receiveStep = (step) => {
  return ({
    type: RECEIVE_STEP,
    step
  })
}


export const removeStep = (step) => {
  return ({
    type: REMOVE_STEP,
    step
  })
}

export const fetchSteps = todo => {
  return dispatch => {
    return APIUtil.fetchSteps(todo)
                  .then(
                    steps => {return dispatch(receiveSteps(steps))}
                  )
  }
}

export const createStep = (todo, step) => {
  return dispatch => {
    return APIUtil.createStep(todo, step)
                  .then(
                    step => {return dispatch(receiveStep(step))},
                    errors => {return dispatch(receiveErrors(errors.responseJSON))}
                  ).then(
                    () => { return dispatch(clearErrors()) }
                  )
  }
}

export const deleteStep = (step) => {
  return dispatch => {
    return APIUtil.deleteStep(step)
                  .then(
                    step => {return dispatch(removeStep(step))},
                    errors => { return dispatch(receiveErrors(errors.responseJSON))}
                  ).then(
                    () => { return dispatch(clearErrors()) }
                  )
  }
}