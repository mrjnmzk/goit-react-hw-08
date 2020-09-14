import axios from "axios";
import authActions from "../auth/authActions";

const API_KEY = "AIzaSyBAEd5ak-7FJ2H7WyY6u7RWrc7-73SPnbg";

const methods = {
  signUp: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
  signIn: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`
};

export const register = userData => dispatch => {
  dispatch(authActions.registerRequest());
  axios
    .post(methods.signUp, userData)
    .then(res =>
      dispatch(
        authActions.registerSuccess({
          token: res.data.idToken,
          email: res.data.email
        })
      )
    )
    .catch(error => dispatch(authActions.registerError(error)));
  // .finally(() => dispatch(loaderOff()));
};

export const logIn = userData => dispatch => {
  dispatch(authActions.registerRequest());
  axios
    .post(methods.signIn, userData)
    .then(res =>
      dispatch(
        authActions.registerSuccess({
          token: res.data.idToken,
          email: res.data.email
        })
      )
    )
    .catch(error => dispatch(authActions.registerError(error)));
  // .finally(() => dispatch(loaderOff()));
};
