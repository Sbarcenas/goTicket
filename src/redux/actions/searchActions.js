import {SET_QUERY, SET_RESULTS} from '../types';

export const _SET_QUERY = spam => async dispatch => {
  dispatch({
    type: SET_QUERY,
    payload: spam,
  });
};

export const _SET_RESULTS = spam => async dispatch => {
  dispatch({
    type: SET_RESULTS,
    payload: spam,
  });
};
