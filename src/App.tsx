import { Route, Routes } from 'react-router-dom'
import styles from './App.css'
import { AboutPage } from './pages/AboutPage/AboutPage'
import { ContactPage } from './pages/ContactPage/ContactPage'
import { MainPage } from './pages/MainPage/MainPage'
import { ProjectsPage } from './pages/ProjectsPage/ProjectsPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/projects' element={<ProjectsPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
  )
}

export default App
