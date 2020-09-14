import constants from "./authConstants";
import { combineReducers } from "redux";

const initialState = {
  email: "",
  token: ""
};

const authReducer = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case constants.REGISTER_REQUEST:
      return { ...state };
    case constants.REGISTER_SUCCESS:
      return { ...state, ...payload };
    case constants.REGISTER_ERROR:
      return payload;
    case constants.LOGOUT_SUCCESS:
      return { ...initialState };

    default:
      return state;
  }
};

export default combineReducers({
  onAuth: authReducer

});
