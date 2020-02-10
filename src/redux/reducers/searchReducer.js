import {SET_QUERY, SET_RESULTS} from '../types';

const INITIAL_STATE = {
  result: {},
  query: '',
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_QUERY:
      return {...state, query: action.payload};
    case SET_RESULTS:
      return {
        ...state,
        result: {...state.result, [action.payload.key]: action.payload.values},
      };
    default:
      return state;
  }
}
