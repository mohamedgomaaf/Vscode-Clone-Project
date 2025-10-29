import { useSelector } from 'react-redux'
import Preview from './components/Preview'
import RecursiveComponent from './components/RecursiveComponent'
import ResizablePanel from './components/ResizablePanel'
import { fileTree } from './data/fileTree'
import type { RootState } from './app/store'
import WelcomeTab from './components/WelcomeTab'

function App() {
  const { openFiles } = useSelector(({ tree }: RootState) => tree)

  return (
    <div>
      <div className='flex h-screen'>
        <ResizablePanel
          leftPanel={<div className="w-64 p-2">
            <RecursiveComponent fileTree={fileTree} />
          </div>}
          rightPanel={openFiles.length > 0 ? <Preview /> : <WelcomeTab />}
          showLeftPanel={true}
        />
      </div>

    </div>
  )
}

export default App