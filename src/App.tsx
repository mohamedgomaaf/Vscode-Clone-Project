import FileComponent from './components/FileComponent'
import { fileTree } from './data/fileTree'

  function App() {
    return (
      <div>
        {
          fileTree.children && fileTree.children?.map((file, index) => (
            <FileComponent isFolder={file.isFolder} filename={file.name} key={index} />
          ))
        }
      </div>
    )
  }

  export default App
