import FileIcon from "./SVG/File"
import FolderIcon from "./SVG/Folder"
import RightArrowIcon from "./SVG/Right"

interface IProps {
  filename: string
  isFolder?: boolean
}

function FileComponent({ filename, isFolder }: IProps) {
  return (
    <div className='flex items-center mb-2'>
      <RightArrowIcon />
      {isFolder ? <span className='mr-2'><FolderIcon /></span> : <span className='mr-2'><FileIcon /></span>}
      <span>{filename}</span>
    </div>
  )
}

export default FileComponent