import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../interfaces";

interface IClickedFile {
  activeTabId: string | null;
  filename: string;
  fileContent: string | undefined;
}
interface IInitialState {
  openFiles: IFile[];
  clickedFile: IClickedFile;
  tabIdToRemove: string | null;
}

const initialState: IInitialState = {
  openFiles: [],
  clickedFile: {
    activeTabId: null,
    filename: "",
    fileContent: "",
  },
  tabIdToRemove: null,
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
    setTabIdToRemoveAction: (
      state,
      actionPayload: PayloadAction<string | null>
    ) => {
      state.tabIdToRemove = actionPayload.payload;
    },
  },
});

export const { setOpenFilesAction, setClickedFileAction, setTabIdToRemoveAction } =
  FileTreeSlice.actions;
export default FileTreeSlice.reducer;
