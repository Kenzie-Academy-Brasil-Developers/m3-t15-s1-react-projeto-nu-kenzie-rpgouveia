import { useState } from 'react'
import { LandingPage } from './pages/LandingPage'
import './styles/index.css'

function App() {
  const [currentPage, setCurrentPage] = useState('')
  console.log('Current Page:', currentPage)

  return (
    <main>
      <LandingPage setCurrentPage={setCurrentPage}/>
    </main>
  )
}

export default App
