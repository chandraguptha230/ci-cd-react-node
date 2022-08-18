import { LOGIN, SET_USER, LOGOUT, SET_BUSINESS } from '../actions/types';
import { SEND_FORGET_PASSWORD_EMAIL, UPDATE_AUTH_USER, UPDATE_LOAD_USER } from '../../@jumbo/constants/ActionTypes';

//Dummy Data
import { businessDetails } from '../../utils/dummyData';

const token = localStorage.getItem('idToken');

const INIT_STATE = {
  authUser: null,
  loadUser: false,
  send_forget_password_email: false,
  isLoggedIn: token ? true : false,
  user: {},
  business: businessDetails,
  token: '',
};

export default (state = INIT_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_AUTH_USER: {
      return {
        ...state,
        authUser: payload,
        loadUser: true,
      };
    }

    case UPDATE_LOAD_USER: {
      return {
        ...state,
        loadUser: payload,
      };
    }

    case SEND_FORGET_PASSWORD_EMAIL: {
      return {
        ...state,
        send_forget_password_email: payload,
      };
    }

    case LOGIN:
      return {
        isLoggedIn: true,
      };

    case SET_USER:
      return {
        ...state,
        isLoggedIn: true,
        user: payload,
      };
    case SET_BUSINESS:
      return {
        ...state,
        business: payload,
      };
    case LOGOUT:
      return {
        ...state,
        ...INIT_STATE,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};
