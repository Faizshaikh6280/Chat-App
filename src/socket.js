import { io } from "socket.io-client";

let socket;

const connectSocket = (user_id) => {
  socket = io("https://localhost:3000", {
    query: {
      user_id,
    },
  });
};

export { socket, connectSocket };
