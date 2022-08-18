//For expanding sidebar
import {
  UPDATE_CART,
  UPDATE_CART_ITEMS,
  CLEAR_CART,
  SET_CART_ITEMS_COUNT
} from './types';



import { fetchError, fetchStart, fetchSuccess } from './Common';
import axios from 'axios';

//For expanding sidebar
export const handleCartItem = (id, action) => {
  return dispatch => {
    dispatch({
      type: UPDATE_CART_ITEMS,
      payload: value,
    });
  };
};
