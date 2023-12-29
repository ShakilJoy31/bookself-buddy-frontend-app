import { Books } from './page/Books';
import { Navbar } from './page/Navbar';

function App() {
  return (
    <div className='mx-2 md:mx-4 lg:mx-6 bg-black min-h-screen'>
      <Navbar></Navbar>
      <Books></Books>
    </div>
  )
}

export default App
