import {SET_CREATE_CUSTOMER_DIALOG} from "../actions/types";

const INIT_STATE = {
    create_customer: false
};

export default (state = INIT_STATE, action) => {
  const {type, payload} = action;

  switch (type) {
    case SET_CREATE_CUSTOMER_DIALOG: {
      return {
        ...state,
        create_customer: payload ? payload : !state.create_customer
      };
    }
  
    default:
      return state;
  }
};
