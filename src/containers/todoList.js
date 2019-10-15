import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { FETCH_DATA } from '../redux/actions';

const mapStateToProps = state => {
  const loading = state.loading;
  const todos = state.todos;
  const error = state.error;

  const componentState = {};
  componentState.loading = loading;
  componentState.todos = todos;
  componentState.error = error;
  return componentState;
};

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch({ type: FETCH_DATA })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
