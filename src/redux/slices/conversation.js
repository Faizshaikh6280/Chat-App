import { createSlice } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";

const initialState = {
  direct_chat: {
    conversations: [],
    current_conversation: null,
    current_messages: [],
  },
  group_chat: {},
};

const user_id = window.localStorage.getItem("user_id");

const slice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    fetchDirectConversation(state, actions) {
      const list = actions.payload.conversations.map((el) => {
        const this_user = el.participants.find(
          (elm) => elm._id.toString() !== user_id
        );
        return {
          id: el._id,
          user_id: this_user._id,
          name: `${this_user.firstName} ${this_user.lastName}`,
          online: this_user.status === "Online",
          img: faker.image.avatar(),
          msg: faker.music.songName(),
          time: "9:38",
          unread: 0,
          pinned: false,
        };
      });
      state.direct_chat.conversations = list;
    },
  },
});

const { fetchDirectConversation } = slice.actions;
export default slice.reducer;
