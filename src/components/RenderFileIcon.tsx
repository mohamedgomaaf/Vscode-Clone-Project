import IconImg from "./IconImg";

interface IProps {
 filename: string;
 isFolder: boolean;
 isOpen?: boolean;
}

function RenderFileIcon({ filename, isFolder, isOpen }: IProps) {
 const ext = isFolder ? filename : filename.split('.').pop();

 return (
  <>
   {isFolder ? (
    (() => {
     if (ext === 'node_modules') return isOpen ?
      <IconImg src={`/icons/folder-node-open.svg`} />
      : <IconImg src={`/icons/folder-node.svg`} />;
     if (ext === 'src') return isOpen ?
      <IconImg src={`/icons/folder-src-open.svg`} />
      : <IconImg src={`/icons/folder-src.svg`} />;
     if (ext === 'public') return isOpen ? <IconImg src={`/icons/folder-public-open.svg`} />
      : <IconImg src={`/icons/folder-public.svg`} />;
     if (ext === 'components') return isOpen ? <IconImg src={`/icons/folder-components-open.svg`} />
      : <IconImg src={`/icons/folder-components.svg`} />;

     return isOpen ? <IconImg src={`/icons/folder-default-open.svg`} /> : <IconImg src={`/icons/folder-default.svg`} />;
    })()
   ) : (
    (() => {
     const fileExt = filename.split('.').pop();
     if (fileExt === 'tsx') return <IconImg src={`/icons/react_ts.svg`} />;
     if (fileExt === 'jsx') return <IconImg src={`/icons/react.svg`} />;
     if (fileExt === 'js') return <IconImg src={`/icons/javascript.svg`} />;
     if (fileExt === 'ts') return <IconImg src={`/icons/javascript.svg`} />;
     return <IconImg src={`/icons/${fileExt}.svg`} />;
    })()
   )}

  </>
 );
}

export default RenderFileIcon;
