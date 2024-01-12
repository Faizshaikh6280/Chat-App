import { Dialog, DialogContent, Stack, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchFriendRequests,
  FetchFriends,
  FetchUsers,
} from "../redux/slices/app";
import {
  FriendElement,
  UserElement,
  FriendRequestElement,
} from "./FriendElements";
function UserList() {
  const dispatch = useDispatch();
  useEffect(
    function () {
      dispatch(FetchUsers());
    },
    [dispatch]
  );

  const { users } = useSelector((store) => store.app);
  console.log(users);
  return (
    <>
      {/* build ui of user */}
      {users.map((el, indx) => {
        return <UserElement key={el._id} {...el} />;
      })}
    </>
  );
}

function FriendList() {
  const dispatch = useDispatch();
  useEffect(
    function () {
      dispatch(FetchFriends());
    },
    [dispatch]
  );

  const { friends } = useSelector((store) => store.app);

  console.log(friends);
  return (
    <>
      {/* build ui of user */}
      {friends.map((el, indx) => {
        return <FriendElement key={el._id} {...el} />;
      })}
    </>
  );
}

function FriendRequestList() {
  const dispatch = useDispatch();
  useEffect(
    function () {
      dispatch(FetchFriendRequests());
    },
    [dispatch]
  );
  const { friendRequests } = useSelector((store) => store.app);
  console.log(friendRequests);
  return (
    <>
      {/* build ui of user */}
      {friendRequests.map((el, indx) => {
        return <FriendRequestElement key={el._id} {...el.sender} id={el._id} />;
      })}
    </>
  );
}

function Friends({ open, handleClose }) {
  const [value, setValue] = useState(0);

  function handleChange(event, value) {
    setValue(value);
  }

  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={handleClose}>
      <Stack p={2} sx={{ width: "100%" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Explore" />
          <Tab label="Friends" />
          <Tab label="Requests" />
        </Tabs>
      </Stack>
      <DialogContent>
        <Stack>
          {(() => {
            switch (value) {
              case 0:
                return <UserList />;
              case 1:
                return <FriendList />;
              case 2:
                return <FriendRequestList />;
              default:
                break;
            }
          })()}
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

export default Friends;
