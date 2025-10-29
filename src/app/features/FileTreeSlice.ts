import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../interfaces";

interface IClickedFile {
  filename: string;
  fileContent: string | undefined;
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
    setOpenFilesAction: (state, actionPayload: PayloadAction<IFile[]>) => {
      state.openFiles = actionPayload.payload;
    },
    setClickedFileAction: (
      state,
      actionPayload: PayloadAction<IClickedFile>
    ) => {
      state.clickedFile = actionPayload.payload;
    },
  },
});

export const { setOpenFilesAction, setClickedFileAction } =
  FileTreeSlice.actions;
export default FileTreeSlice.reducer;
