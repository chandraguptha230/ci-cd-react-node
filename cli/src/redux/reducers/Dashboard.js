import {
  SET_DASHBOARD_DATA,
} from '../actions/types';

const INIT_STATE = {
    business: {},
    counts: {
      users: 0,
      customers: 0,
      products: 0,
      orders: 0
    },
    popularProducts: [],
    unpaidCustomers: [],
    unpaidOrders: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_DASHBOARD_DATA: {
      return {
        ...state,
        ...action.payload
      };
    }

    default:
      return state;
  }
};
