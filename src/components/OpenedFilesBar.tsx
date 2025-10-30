import { useSelector } from "react-redux"
import type { RootState } from "../app/store"
import OpenedFilesBarTab from "./OpenedFilesBarTab"
import { useState } from "react";
import ContextMenu from "./ui/ContextMenu";

function OpenedFilesBar() {
 const { openFiles } = useSelector((state: RootState) => state.tree)
 const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
 const [showMenu, setShowMenu] = useState(false);
 return (
  <div >
   <div
    onContextMenu={(e: React.MouseEvent) => {
     e.preventDefault()
     setMenuPosition({ x: e.clientX, y: e.clientY })
     setShowMenu(true)
    }}
    className="flex items-center border-b border-[#ffffff1f]">
    {
     openFiles.map((file) => <OpenedFilesBarTab key={file.id} file={file} />)
    }
   </div>
   {showMenu && <ContextMenu position={menuPosition} setShowMenu={setShowMenu} />}
  </div>
 )
}

export default OpenedFilesBar