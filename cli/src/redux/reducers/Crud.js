import {CLEAR_DATA, SET_DATA} from "../actions/types";

const initialState = {
  roles: [],
  users: []
};

export default function(state = initialState, action){
  const {type, payload} = action;

  switch (type) {
    case CLEAR_DATA:
      return {...state, [payload]: []};
    case SET_DATA:
      return {...state, [payload.name]: payload.data};
    default:
      return state;
  }
}
