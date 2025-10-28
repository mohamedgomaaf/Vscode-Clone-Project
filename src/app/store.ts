import { configureStore } from "@reduxjs/toolkit";
import FileTreeSlice from "./features/FileTreeSlice";

export const store = configureStore({
  reducer: {
    tree: FileTreeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
