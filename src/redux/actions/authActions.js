import {
  USER_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../types';
import {returnErrors} from './ErrorActions';
import {users, logout as out, login as log} from '../../services/feathers';
import {pushloginStackScreen} from '../../navigation/layouts/stack';

import {LoginManager} from 'react-native-fbsdk';
import {LOGIN_FB} from '../../services/actionService';

// Register User
export const REGISTER = ({
  email,
  first_name,
  last_name,
  password,
  gender,
  date,
}) => async dispatch => {
  // Request body
  return users
    .create({
      email,
      first_name,
      last_name,
      password,
      status: 'active',
      gender: gender,
      birthday: date,
    })
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        //payload: res,
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.message, err.code, 'REGISTER_FAIL'));
      dispatch({
        type: REGISTER_FAIL,
      });
      throw err;
    });
};

// Login User
export const LOGIN = ({email, password}) => dispatch => {
  // Request body
  return log(email, password)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.user,
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.message, err.code, 'LOGIN_FAIL'));
      dispatch({
        type: LOGIN_FAIL,
      });
      throw err;
    });
};

export const FACEBOOK_LOGIN = result => async dispatch => {
  return LOGIN_FB(result).then(() => {
    return log().then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.user,
      }),
    );
  });
};

export const LOGOUT = () => async dispatch => {
  await LoginManager.logOut();
  return out()
    .then(() => {
      pushloginStackScreen();
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.message, err.code, 'LOGOUT_FAIL'));
      throw err;
    });
};

// We going to get user data!
export const loadUser = () => async (dispatch, getState) => {
  dispatch({type: USER_LOADING});
};
