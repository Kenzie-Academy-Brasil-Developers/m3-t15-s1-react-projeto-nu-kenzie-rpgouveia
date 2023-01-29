import { useState } from 'react'
import { LandingPage } from './pages/LandingPage'
import { ApplicationPage } from './pages/ApplicationPage'
import './styles/index.css'

function App() {
  const [currentPage, setCurrentPage] = useState('')

  return (
    <main>
      {currentPage === '' && <LandingPage setCurrentPage={setCurrentPage}/>}
      {currentPage === 'application_page' && <ApplicationPage setCurrentPage={setCurrentPage}/>}
    </main>
  )
}

export default App