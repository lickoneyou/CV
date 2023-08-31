import './App.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Aside from './Components/Aside/Aside'
import Main from './Components/Main/Main'
import MainCertificates from './Components/Main/MainCertificates/MainCertificates'
import MainProjects from './Components/Main/MainProjects/MainProjects'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'


function App() {
  const [state, setState] = useState('App')
  return (
    <>
      <div className={state}>
        <Header />
        <Router>
          <Routes>
            <Route path='/' element={[<Main key={1} st={setState}/>, <Aside key={2} />]} />
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
