//For expanding sidebar
import {
    SET_DASHBOARD_DATA
  } from './types';
  import { fetchError, fetchStart, fetchSuccess } from './Common';
  import axios from 'axios';
  import commonData from '../../utils/commonData';
  
  import { authHeader } from "../../services/auth-header";

  //for getting customer categories(in sidebar) count
  export const getAdminDashboard = () => {
    return dispatch => {
    dispatch(fetchStart())

      axios
        .get(`${commonData.apiUrl}/admin/dashboard`, {
            headers: authHeader(),
          })
        .then(({data}) => {
            console.log(data.data)
            dispatch({ type: SET_DASHBOARD_DATA, payload: data });
            dispatch(fetchSuccess())
        })
        .catch(error => {
          dispatch(fetchError('Something went wrong'));
        });
    };
  };
  