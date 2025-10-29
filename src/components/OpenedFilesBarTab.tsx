import { useDispatch, useSelector } from "react-redux";
import type { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { setClickedFileAction } from "../app/features/FileTreeSlice";
import type { RootState } from "../app/store";

interface IProps {
 file: IFile;
}

function OpenedFilesBarTab({ file }: IProps) {
 const dispatch = useDispatch();
 const { clickedFile } = useSelector((state: RootState) => state.tree)

 const handleClick = (file: IFile) => {
  dispatch(setClickedFileAction({ filename: file.name, fileContent: file.content }));
 }

 return (
  <div className={`max-w-screen-md flex items-center p-2 trans ${clickedFile.filename == file.name ? "border-[#cf6ccf] border-t-2 " : ""} `} onClick={() => handleClick(file)}>
   <RenderFileIcon filename={file.name} isFolder={file.isFolder} />
   <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-2 p-1 rounded-md">
    {file.name}
   </span>
   <span
    className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md"
   >
    <CloseIcon />
   </span>
  </div>
 )
}

export default OpenedFilesBarTab