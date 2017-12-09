import { ADD_NAME } from '../actions/actions.jsx';

const names = (state = ['yazhi', 'brian', 'luke'], action) => {
  switch (action.type) {
    case ADD_NAME:
      return state.concat([action.name])
    default:
      return state
  }
}

export default names;