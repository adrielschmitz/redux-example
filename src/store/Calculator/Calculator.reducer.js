const INITIAL_STATE = 0

const Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SUM':
      return action.payload[0] + action.payload[1]
    case 'SUBTRACT':
      return action.payload[0] - action.payload[1]
    default:
      return state
  }
}

export default Reducer
