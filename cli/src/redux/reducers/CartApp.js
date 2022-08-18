import {
    UPDATE_CART,
    UPDATE_CART_ITEMS,
    CLEAR_CART,
    SET_CART_ITEMS_COUNT
  } from '../actions/types';
  
  const INIT_STATE = {
        cart_items: [],
        total: 0,
        cart_items_count: 0   
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
     
      case UPDATE_CART: {
        return {
          ...state,
          ...action.payload
        };
      }



      case UPDATE_CART_ITEMS: {
        return {
          ...state,
            cart_items: action.payload
        };
      }

      case CLEAR_CART: {
        return {
            ...state,
              cart_items: [],
          cart_items_count: 0
        };
      }

      
      case SET_CART_ITEMS_COUNT: {
        return {
          ...state,
          cart_items_count: action.payload
        };
      }
  
      default:
        return state;
    }
  };
  