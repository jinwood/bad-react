export const FETCH_DATA = "FETCH_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

export const fetchData = () => ({
  type: FETCH_DATA
});

export const fetchDataSuccess = payload => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload
  };
};

export const fetchDataError = error => ({
  type: FETCH_DATA_ERROR,
  error
});
