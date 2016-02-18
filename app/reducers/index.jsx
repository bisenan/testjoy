import { combineReducers } from 'redux'

function error(state = null, action) {
  const { type, error } = action

  if (error) {
    return action.error
  }

  return state
}

const reducers = combineReducers({
  error,
})

export default reducers
