//for getting  mail detail
import {fetchStart, fetchSuccess} from "./Common";
// import axios from "axios";
import {GET_USER_DETAIL} from "../../@jumbo/constants/ActionTypes";
import {userDetails} from "utils/dummyData";

export const getUserDetail = () => {
  return dispatch => {
    dispatch(fetchStart());
    setTimeout(() => {
      dispatch(fetchSuccess());
      dispatch({type: GET_USER_DETAIL, payload: userDetails});
    }, 3000);
  };
};
