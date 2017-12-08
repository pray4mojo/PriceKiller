import namesComponent from '../components/namesComponent.js';
import { connect } from 'react-redux';
import store from '../reducers/main.js';

const mapStateToProps = state => {
  return {
    names: state.names
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: (event) => {
      const name = event.target.childNodes[0].value;
      const yazhi = store.getState().names[0];
      console.log('Yazhi? ', yazhi);
      dispatch({type: 'INCREMENT', name: name})
      event.target.childNodes[0].value = '';
      event.preventDefault();
    }
  }
}

const NameList = connect(mapStateToProps, mapDispatchToProps)(namesComponent);

export default NameList;