import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Header from './Components/Header/Header'
import Aside from './Components/Aside/Aside'
import Main from './Components/Main/Main'
import MainCertificates from './Components/Main/MainCertificates/MainCertificates'
import MainProjects from './Components/Main/MainProjects/MainProjects'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'

window.addEventListener('hashchange', function () {
  console.log('location changed!')
})

function App() {
  const [state, setState] = useState('App')
  return (
    <>
      <div className={state}>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={[<Main />, <Aside />]} />
            <Route path="/Projects" element={<MainProjects st={setState} />} />
            <Route
              path="/Certificates"
              element={<MainCertificates st={setState} />}
            />
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  )
}

export default App
