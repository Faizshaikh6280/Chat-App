import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import appReducer from "./slices/app";
import authReducer from "./slices/auth";
import conversationSlice from "./slices/conversation";
// slices

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  //whitelist : []
  //blacklist : []
};

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  conversation: conversationSlice,
});
export { rootPersistConfig, rootReducer };
