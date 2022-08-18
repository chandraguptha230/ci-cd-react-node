// import {fetchError, fetchStart, fetchSuccess} from "../actions";

import {SET_MESSAGE} from "./types";

import DataServices from "../../services/http-api/data.service";

export const uploadFile = (file, type) => async dispatch => {
  //  dispatch(fetchStart());
  return await DataServices.uploadFile(file, type).then(
    res => {
      let data = res.data;
      console.log(data);
      //   dispatch({type: SET_DATA, payload: { name: 'users', data: data }})
      return Promise.resolve(data);
    },
    error => {
      console.log("GET ERROR");
      console.log(error.response);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};
