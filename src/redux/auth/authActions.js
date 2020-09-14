import constants from "./authConstants";


const registerRequest = () => ({
  type: constants.REGISTER_REQUEST
});
const registerSuccess = userData => ({
  type: constants.REGISTER_SUCCESS,
  payload: { ...userData }
});
const registerError = error => ({
  type: constants.REGISTER_ERROR,
  payload: error
});

const logoutSuccess = () => ({
  type: constants.LOGOUT_SUCCESS
});

export default {
  registerRequest,
  registerSuccess,
  registerError,
  logoutSuccess

};
