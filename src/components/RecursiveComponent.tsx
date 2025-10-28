import { useState } from "react";
import type { IFile } from "../interfaces";
import FileIcon from "./SVG/File"
import FolderIcon from "./SVG/Folder"
import RightArrowIcon from "./SVG/Right"
import BottomArrowIcon from "./SVG/Bottom";

interface IProps {
  fileTree: IFile;
}

function RecursiveComponent({ fileTree }: IProps) {
  const { name, isFolder, children } = fileTree;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className='mb-2 ml-2 cursor-pointer'>
      <div className={`flex items-center mb-1 ${isFolder ? '' : 'ml-4'}`} onClick={() => setIsOpen(!isOpen)}>
        {isFolder ? isOpen ? <BottomArrowIcon /> : <RightArrowIcon /> : null}
        {isFolder ? <span className='mr-2'><FolderIcon /></span> : <span className='mr-2'><FileIcon /></span>}
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