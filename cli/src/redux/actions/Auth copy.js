import { fetchError, fetchStart, fetchSuccess } from '../actions';

import { SEND_FORGET_PASSWORD_EMAIL, UPDATE_AUTH_USER, UPDATE_LOAD_USER } from '../../@jumbo/constants/ActionTypes';
import {
  LOGIN,
  LOGOUT,
  SET_MESSAGE,
  SET_LOADING,
  STOP_LOADING,
  SET_ERRORS,
  SET_USER,
  CLEAR_USER,
  SET_BUSINESS
} from "./types";

import AuthService from "../../services/http-api/auth.service";
import { getUsers } from './Crud';


export const setAuthUser = user => {
  return dispatch => {
    dispatch({
      type: UPDATE_AUTH_USER,
      payload: user,
    });
  };
};

export const updateLoadUser = loading => {

  return dispatch => {
    dispatch({
      type: UPDATE_LOAD_USER,
      payload: loading,
    });
  };
};

export const setForgetPassMailSent = status => {
  return dispatch => {
    dispatch({
      type: SEND_FORGET_PASSWORD_EMAIL,
      payload: status,
    });
  };
};



export const register = (values) => (dispatch) => {
  return AuthService.register(values).then(
    (response) => {

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();


      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const login = (values) => (dispatch) => {
  dispatch({
    type: SET_LOADING
  });

  return AuthService.login(values).then(
    (data) => {
      dispatch({type: SET_MESSAGE, 
        payload: { text: 'Login Successfully!', type: 'success'}
      })
      dispatch({
        type: LOGIN
      }); 

      dispatch(getUserData());
      // history.push(`${data && !data.isVerified ? '/admin/unverified' : '/admin'}`)
      return Promise.resolve();
    },
    (error) => {

      error.response?.data?.errors && 
      dispatch({
        type: SET_ERRORS,
        payload: error.response?.data?.errors
      });

      dispatch({
        type: STOP_LOADING
      });

      error.response?.data?.message &&
      dispatch({type: SET_MESSAGE, 
        payload: error.response?.data?.message
      })


      return Promise.reject();
    }
  );
};

export const getUserData = (history) => (dispatch) => {
  return AuthService.getAuthUser().then(
    (res) => {
      let { user, business } = res.data;
      dispatch(setAuthUser(user))
      dispatch({
        type: SET_USER,
        payload: user
      });

      dispatch({
        type: SET_BUSINESS,
        payload: business
      });
      
      dispatch({
        type: STOP_LOADING
      });
      return Promise.resolve();
    },
    (error) => {
      console.log(error.response)
      error.response?.data?.errors && 
      dispatch({
        type: SET_ERRORS,
        payload: error.response?.data?.errors
      });
    
      dispatch({
        type: STOP_LOADING
      });

      error.response?.data?.message &&
      dispatch({type: SET_MESSAGE, 
        payload: error.response?.data?.message
      })

      dispatch(logout())

      return Promise.reject();
    }
  );
};

export const logout = (history) => (dispatch) => {

       
     return AuthService.logout().then(
      (res) => {
        localStorage.clear();
        dispatch({
          type: CLEAR_USER
        });
        dispatch({
          type: LOGOUT,
        });
        dispatch(setAuthUser(null));
        dispatch(fetchSuccess())
        return Promise.resolve();
      },
      (error) => {
        localStorage.clear()
        dispatch({
          type: CLEAR_USER
        });
        dispatch({
          type: LOGOUT,
        });
        dispatch(setAuthUser(null));
        dispatch(fetchSuccess())
        console.log(error.response)
        error.response?.data?.errors && 
        dispatch({
          type: SET_ERRORS,
          payload: error.response?.data?.errors
        });
      
  
        error.response?.data?.message &&
        dispatch({type: SET_MESSAGE, 
          payload: error.response?.data?.message
        })
  
        return Promise.reject();
      }
    );


    
};

export const suspendUser = (id) => (dispatch) => {

     return AuthService.suspend(id).then(
      (res) => {
        let data = res.data;
        dispatch(getUsers())
        return Promise.resolve();
      },
      (error) => {
        console.log(error.response)
        error.response?.data?.errors && 
        dispatch({
          type: SET_ERRORS,
          payload: error.response?.data?.errors
        });
      
  
        error.response?.data?.message &&
        dispatch({type: SET_MESSAGE, 
          payload: error.response?.data?.message
        })
  
        return Promise.reject();
      }
    );


    
};