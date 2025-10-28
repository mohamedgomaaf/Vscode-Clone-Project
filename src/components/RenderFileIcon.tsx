import IconImg from "./IconImg";
import FileIcon from "./SVG/File";

interface IProps {
  filename: string;
  isFolder: boolean;
  isOpen?: boolean;
}

import { extensionIconPaths } from "../constant";

function RenderFileIcon({ filename, isFolder, isOpen }: IProps) {
  const ext = isFolder ? filename : filename.split(".").pop();
  const hasCustomIcon = ext && Object.hasOwn(extensionIconPaths, ext);

  let iconSrc = "";

  if (isFolder) {
    if (hasCustomIcon) {
      iconSrc = isOpen
        ? extensionIconPaths[ext!].replace(".svg", "-open.svg")
        : extensionIconPaths[ext!];
    } else {
      iconSrc = isOpen
        ? "/icons/folder-default-open.svg"
        : "/icons/folder-default.svg";
    }
  } else {
    if (hasCustomIcon) {
      iconSrc = extensionIconPaths[ext!];
    } else {
      return <FileIcon />;
    }
  }

  return <IconImg src={iconSrc} />;
}

export default RenderFileIcon;
