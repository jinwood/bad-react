import { FETCH_DATA, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from './actions';

const initialState = {
  todos: {},
  loading: false,
  error: ''
};

function reducer(state, action) {
  if (typeof state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case FETCH_DATA:
      return Object.assign({}, state, {
        loading: true
      });

    case FETCH_DATA_SUCCESS:
      return Object.assign({}, state, {
        todos: action.payload.slice(0, 10)
      });

    case FETCH_DATA_ERROR:
      return Object.assign({}, state, {});
  }
}

export default reducer;
