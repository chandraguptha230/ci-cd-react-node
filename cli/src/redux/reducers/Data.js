import {SET_SELECTED_USER, SET_INIT_OBJ} from "../actions/types";

const INIT_STATE = {
  selectedUser: {
    birthDate: new Date(),
    roles: [],
    gender: "male"
  }
};

export default (state = INIT_STATE, action) => {
  const {type, payload} = action;

  switch (type) {
    case SET_SELECTED_USER: {
      return {
        ...state,
        selectedUser: payload
      };
    }
    case SET_INIT_OBJ: {
      return {
        ...state,
        [payload]: INIT_STATE[payload]
      };
    }
    default:
      return state;
  }
};
