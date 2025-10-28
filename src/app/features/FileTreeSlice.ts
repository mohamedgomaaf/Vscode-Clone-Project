import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../interfaces";

interface IClickedFile {
  filename: string;
  fileContent: string;
}
interface IInitialState {
  openFiles: IFile[];
  clickedFile: IClickedFile;
}

const initialState: IInitialState = {
  openFiles: [],
  clickedFile: {
    filename: "",
    fileContent: "",
  },
};

const FileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenFiles: (state, actionPayload: PayloadAction<IFile[]>) => {
      state.openFiles = actionPayload.payload;
    },
  },
});

export const { setOpenFiles } = FileTreeSlice.actions;
export default FileTreeSlice.reducer;