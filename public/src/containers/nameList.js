import namesComponent from '../components/namesComponent.js';
import { connect } from 'react-redux';
import { addName } from '../actions/actions.jsx';

const mapStateToProps = state => {
  return {
    names: state.names
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: (event) => {
      const name = event.target.childNodes[0].value;
      dispatch(addName(name));
      event.target.childNodes[0].value = '';
      event.preventDefault();
    }
  }
}

const NameList = connect(mapStateToProps, mapDispatchToProps)(namesComponent);

export default NameList;