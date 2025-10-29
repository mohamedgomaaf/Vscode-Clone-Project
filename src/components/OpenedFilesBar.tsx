import { useSelector } from "react-redux"
import type { RootState } from "../app/store"
import OpenedFilesBarTab from "./OpenedFilesBarTab"

function OpenedFilesBar() {
 const { openFiles } = useSelector((state: RootState) => state.tree)
 return (
  <div>
   <ul className="flex items-center border-b border-gray-500">
    {
     openFiles.map((file) => <OpenedFilesBarTab key={file.id} file={file} />)
    }
   </ul>
  </div>
 )
}

export default OpenedFilesBar