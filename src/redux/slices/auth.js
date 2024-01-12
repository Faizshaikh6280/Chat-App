import { createSlice } from "@reduxjs/toolkit";
import axios from "../axios";
import { openSnackbar } from "../slices/app";
const initialState = {
  isLoggedIn: false,
  token: "",
  isLoading: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
    },
    signOut(state, action) {
      state.isLoggedIn = false;
      state.token = "";
    },
  },
});

export default slice.reducer;

export function LogoutUser() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.signOut());
    window.localStorage.removeItem("user_id");
  };
}

export function LoginUser(formValues) {
  // formvalues => {email,password}

  return async (dispatch, getState) => {
    await axios
      .post(
        "/auth/login",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        dispatch(
          slice.actions.logIn({
            isLoggedIn: true,
            token: response.data.token,
          })
        );
        window.localStorage.setItem("user_id", response.data.user_id);
        dispatch(
          openSnackbar({ severity: "success", message: response.data.message })
        );
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
        dispatch(
          openSnackbar({
            severity: "error",
            message: err.response.data.message,
          })
        );
      });
  };
}

export function RegisterUser(formValues) {
  // formvalues => {firstName,lastName,email,password}

  return async (dispatch, getState) => {
    await axios
      .post(
        "/auth/register",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        dispatch(
          slice.actions.logIn({
            isLoggedIn: true,
            token: response.data.token,
          })
        );
        window.localStorage.setItem("user_id", response.data.user_id);

        dispatch(
          openSnackbar({ severity: "success", message: response.data.message })
        );
      })
      .catch((err) => {
        console.log(err);
        dispatch(
          openSnackbar({
            severity: "error",
            message: err.response.data.message,
          })
        );
      });
  };
}
