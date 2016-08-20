import { CALL_API } from '../middleware/api'

export const PROBLEM_REQUEST = 'PROBLEM_REQUEST'
export const PROBLEM_SUCCESS = 'PROBLEM_SUCCESS'
export const PROBLEM_FAILURE = 'PROBLEM_FAILURE'

export function getProblem() {
  return (dispatch, getState) => {
    callapiAction = {
      [CALL_API]: {
      types: [ PROBLEM_REQUEST, PROBLEM_SUCCESS, PROBLEM_FAILURE ],
      ndpoint: '/problems/random',
    }
    return dispatch(callapiAction)
  }
}
