
function errorMessage(state = 'initial', action) {
  const { type, error } = action

  if (error) {
    return action.error
  }

  return state
}

export default { errorMessage }
