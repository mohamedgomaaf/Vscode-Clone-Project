import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setClickedFileAction, setOpenFilesAction } from "../../app/features/FileTreeSlice";
import type { RootState } from "../../app/store";

interface IProps {
  setShowMenu: (show: boolean) => void;
  position: {
    x: number,
    y: number,
  }
}

function ContextMenu({ position: { x, y }, setShowMenu }: IProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch()
  const { openFiles, tabIdToRemove } = useSelector((state: RootState) => state.tree)
  const filtered = openFiles.filter((file) => file.id !== tabIdToRemove);


  const onCloseAll = () => {
    dispatch(setOpenFilesAction([]))
  }
  const onClose = () => {
    const { id, name, content } = filtered.length > 0 ? filtered[filtered.length - 1] : { id: null, name: "", content: "" };
    dispatch(setOpenFilesAction(filtered));
    dispatch(
      setClickedFileAction({
        filename: name,
        fileContent: content,
        activeTabId: id,
      })
    );
    dispatch(setOpenFilesAction(filtered));
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event?.target as Node)) {
        setShowMenu(false);
      }
    }
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    }
  }, [setShowMenu]);

  return (
    <div ref={menuRef}>
      <ul
        className="z-10 w-32 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-2"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        style={{
          position: "absolute",
          left: x,
          top: y,
        }}
      >
        <li
          className="text-gray-400 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 duration-300 rounded-sm"
          role="menuitem"
          onClick={onClose}
        >
          Close
        </li>
        <li
          className="text-gray-400 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 duration-300 rounded-sm"
          role="menuitem"
          onClick={onCloseAll}
        >
          Close All
        </li>
      </ul>
    </div>
  )
}

export default ContextMenu