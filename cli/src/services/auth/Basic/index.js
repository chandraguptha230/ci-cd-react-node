import { fetchError, fetchStart, fetchSuccess } from '../../../redux/actions';
import { setAuthUser, setForgetPassMailSent, updateLoadUser } from '../../../redux/actions/Auth';
import { usersModule } from '../../../@fake-db/modules/users';

import React from 'react';

const users = usersModule.usersList;


const BasicAuth = {
  onRegister: ({ name, email, password }) => {
    return dispatch => {
      dispatch(fetchStart());

      setTimeout(() => {
        dispatch(fetchSuccess());
        const user = { name: name, email: email, password: password };
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(setAuthUser(user));
      }, 300);
    };
  },

  onLogin: ({ email, password }) => {
    return dispatch => {
      try {
        dispatch(fetchStart());
        setTimeout(() => {
          const user = users.find(a => a.email === email);
          if(user.status !== 'active') return dispatch(fetchError('User suspended!'))
          if (!user) return dispatch(fetchError('User not found!'));
          dispatch(fetchSuccess());
          localStorage.setItem('user', JSON.stringify(user));
          dispatch(setAuthUser(user));
        }, 300);
      } catch (error) {
        console.log(error);
        dispatch(fetchError(error.message));
      }
    };
  },
  onLogout: () => {
    return dispatch => {
      dispatch(fetchStart());
      setTimeout(() => {
        dispatch(fetchSuccess());
        localStorage.removeItem('user');
        dispatch(setAuthUser(null));
      }, 300);
    };
  },

  getAuthUser: (loaded = false) => {
    return dispatch => {
      dispatch(fetchStart());
      dispatch(updateLoadUser(loaded));

      setTimeout(() => {
        dispatch(fetchSuccess());
        dispatch(setAuthUser(JSON.parse(localStorage.getItem('user'))));
      }, 300);
    };
  },

  onForgotPassword: () => {
    return dispatch => {
      dispatch(fetchStart());
      setTimeout(() => {
        dispatch(setForgetPassMailSent(true));
        dispatch(fetchSuccess());
      }, 300);
    };
  },
  getSocialMediaIcons: () => {
    return <React.Fragment> </React.Fragment>;
  },
};

export default BasicAuth;
