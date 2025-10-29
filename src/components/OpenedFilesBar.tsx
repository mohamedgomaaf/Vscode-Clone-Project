import { useSelector } from "react-redux"
import type { RootState } from "../app/store"
import OpenedFilesBarTab from "./OpenedFilesBarTab"
import FileSyntaxHighlighter from "./FileSyntaxHighlighter"

function OpenedFilesBar() {
 const { openFiles, clickedFile } = useSelector((state: RootState) => state.tree)
 return (
  <div>
   <div className="flex items-center border-b border-gray-500">
    {
     openFiles.map((file) => <OpenedFilesBarTab key={file.id} file={file} />)
    }
   </div>
   <FileSyntaxHighlighter content={clickedFile?.fileContent} />
  </div>
 )
}

export default OpenedFilesBar