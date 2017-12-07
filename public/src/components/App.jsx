import React from 'react';
import { createStore } from 'redux';
// reducer function to pass in to the createStore
const test = (state = ['yazhi', 'brian', 'luke'], action) => {
  switch (action.type) {
    case 'INCREMENT':
    return [
      ...state,
      'Billy Bob'
    ]
    default:
      return state;
  }
}

const store = createStore(test);
const Counter = ({
  value,
  onIncrement
}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
  </div>
);

class App extends React.Component {
  render(){
    return (
      <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({type: 'INCREMENT'})}
        />
      )

  }
}

export default App;