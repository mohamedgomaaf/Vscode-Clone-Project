import OpenedFilesBar from './components/OpenedFilesBar'
import RecursiveComponent from './components/RecursiveComponent'
import { fileTree } from './data/fileTree'

function App() {
  return (
    <div>
      <div className='flex h-screen'>
        <div className='w-64 p-2 border-r border-gray-500'>
          <RecursiveComponent fileTree={fileTree} />
        </div>
        <OpenedFilesBar />
      </div>
    </div>
  )
}

export default App