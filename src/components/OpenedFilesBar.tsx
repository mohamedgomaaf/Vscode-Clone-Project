import { useSelector } from "react-redux"
import type { RootState } from "../app/store"
import OpenedFilesBarTab from "./OpenedFilesBarTab"

function OpenedFilesBar() {
 const { openFiles } = useSelector((state: RootState) => state.tree)
 return (
  <div>
   <div className="flex items-center border-b border-[#ffffff1f]">
    {
     openFiles.map((file) => <OpenedFilesBarTab key={file.id} file={file} />)
    }
   </div>
  </div>
 )
}

export default OpenedFilesBar