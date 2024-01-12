import { createSlice } from "@reduxjs/toolkit";
import axios from "../axios";

const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT", // | CONTACT | STARRED | SHARED
  },
  snackbar: {
    open: false,
    message: null,
    severity: null,
  },
  users: [],
  friends: [],
  friendRequests: [],
  chat_type: null, // individual || group
  room_id: null,
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSideber(state, action) {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
    openSnackbar(state, action) {
      state.snackbar.open = true;
      state.snackbar.severity = action.payload.severity;
      state.snackbar.message = action.payload.message;

      setTimeout(function () {
        slice.actions.closeSnackbar();
      }, 4000);
    },
    closeSnackbar(state, action) {
      state.snackbar.open = false;
      state.snackbar.severity = null;
      state.snackbar.message = null;
    },
    updateUsers(state, action) {
      state.users = action.payload.users;
    },
    updateFriends(state, action) {
      state.friends = action.payload.friends;
    },
    updateFriendRequests(state, action) {
      state.friendRequests = action.payload.requests;
    },
    selectConversation(state, action) {
      state.chat_type = "individual";
      state.room_id = action.payload.room_id;
    },
  },
});

export const {
  toggleSideber,
  updateSidebarType,
  openSnackbar,
  closeSnackbar,
  selectConversation,
} = slice.actions;

export function FetchUsers() {
  return async (dispatch, getState) => {
    await axios
      .get("/user/get-users", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((res) => {
        console.log(res);
        dispatch(slice.actions.updateUsers({ users: res.data.data }));
      })
      .catch((err) => {
        console.log(err);
        dispatch(
          slice.actions.openSnackbar({
            severity: "error",
            message: err.message,
          })
        );
      });
  };
}

export function FetchFriends() {
  return async (dispatch, getState) => {
    await axios
      .get("/user/get-friends", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((res) => {
        console.log(res);
        dispatch(slice.actions.updateFriends({ friends: res.data.data }));
      })
      .catch((err) => {
        console.log(err);
        dispatch(
          slice.actions.openSnackbar({
            severity: "error",
            message: err.response.data.message,
          })
        );
      });
  };
}

export function FetchFriendRequests() {
  return async (dispatch, getState) => {
    await axios
      .get("/user/get-friend-requests", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((res) => {
        console.log(res);
        dispatch(
          slice.actions.updateFriendRequests({ requests: res.data.data })
        );
      })
      .catch((err) => {
        console.log(err);
        dispatch(
          slice.actions.openSnackbar({
            severity: "error",
            message: err.response.data.message,
          })
        );
      });
  };
}

export default slice.reducer;
