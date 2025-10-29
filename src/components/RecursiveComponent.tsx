import { useState } from "react";
import type { IFile } from "../interfaces";
import RightArrowIcon from "./SVG/Right"
import BottomArrowIcon from "./SVG/Bottom";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { setOpenFilesAction } from "../app/features/FileTreeSlice";
import { doesFileObjectExist } from "../utils/function";

interface IProps {
  fileTree: IFile;
}

function RecursiveComponent({ fileTree }: IProps) {
  const { name, isFolder, children } = fileTree;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { openFiles } = useSelector((state: RootState) => state.tree);

  const handleClick = (fileTree: IFile) => {
    if (isFolder) {
      setIsOpen(!isOpen);
    } else {
      if (!doesFileObjectExist(openFiles, fileTree.id)) {
        dispatch(setOpenFilesAction([...openFiles, fileTree]));
      }
    }
  };

  return (
    <div className='mb-2 ml-2 cursor-pointer'>
      <div className={`flex items-center mb-1 ${isFolder ? '' : 'ml-4'}`} onClick={() => { handleClick(fileTree) }}>
        {isFolder ? isOpen ? <BottomArrowIcon /> : <RightArrowIcon /> : null}
        <span className='mr-2'><RenderFileIcon filename={name} isFolder={isFolder} isOpen={isOpen} /></span>
        <span>{name}</span>
      </div>
      {
        isOpen && children?.map((file, index) => (
          <RecursiveComponent fileTree={file} key={index} />
        ))
      }
    </div>
  )
}

export default RecursiveComponent