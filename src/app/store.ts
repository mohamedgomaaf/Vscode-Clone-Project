import { configureStore } from "@reduxjs/toolkit";
import FileTreeSlice from "./features/FileTreeSlice";

export const store = configureStore({
  reducer: {
    fileTree: FileTreeSlice,
  },
});
