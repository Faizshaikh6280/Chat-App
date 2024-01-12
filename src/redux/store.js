import { configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from "redux-persist";
import { rootPersistConfig, rootReducer } from "./rootReducer";

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMidleware) =>
    getDefaultMidleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

const persister = persistStore(store);

export { store, persister };
