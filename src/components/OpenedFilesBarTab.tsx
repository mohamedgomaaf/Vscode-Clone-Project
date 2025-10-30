import { useDispatch, useSelector } from "react-redux";
import type { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { setClickedFileAction, setOpenFilesAction } from "../app/features/FileTreeSlice";
import type { RootState } from "../app/store";

interface IProps {
 file: IFile;
}

function OpenedFilesBarTab({ file }: IProps) {
 const dispatch = useDispatch();
 const { openFiles, clickedFile: { activeTabId } } = useSelector((state: RootState) => state.tree);

 const handleClick = (file: IFile) => {
  dispatch(
   setClickedFileAction({ filename: file.name, fileContent: file.content, activeTabId: file.id })
  );
 };

 const onRemove = (selectedId: string) => {
  const filtered = openFiles.filter((file) => file.id !== selectedId);
  const { id, name, content } = filtered.length > 0 ? filtered[filtered.length - 1] : { id: null, name: "", content: "" };

  dispatch(setOpenFilesAction(filtered));
  dispatch(
   setClickedFileAction({
    filename: name,
    fileContent: content,
    activeTabId: id,
   })
  );
 };


 return (
  <div
   className={`max-w-screen-md flex items-center p-2 border-t-2
   ${activeTabId == file.id ? "border-[#cf6ccf]" : "border-transparent"} `}
   onClick={() => handleClick(file)}
  >
   <RenderFileIcon filename={file.name} isFolder={file.isFolder} />
   <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-2 p-1 rounded-md">
    {file.name}
   </span>
   <span className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center
    items-center w-fit mr-2 p-1 rounded-md"
    onClick={(e) => {
     e.stopPropagation();
     onRemove(file.id)
    }}
   >
    <CloseIcon />
   </span>
  </div>
 );
}

export default OpenedFilesBarTab;
