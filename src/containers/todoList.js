import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { FETCH_DATA } from "../redux/actions";

const mapStateToProps = state => {
  const { loading, todos, error } = state;

  return { loading, todos, error };
};

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch({ type: FETCH_DATA })
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
