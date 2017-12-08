
const reduceLight = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {names: state.names.concat([action.name
        ])})
    default:
      return state;
  }
}

export default reduceLight;