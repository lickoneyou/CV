import './App.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Aside from './Components/Aside/Aside'
import Main from './Components/Main/Main'
import MainCertificates from './Components/Main/MainCertificates/MainCertificates'
import MainProjects from './Components/Main/MainProjects/MainProjects'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'
import Nav from './Components/Header/Nav/Nav'

function App() {
  const [state, setState] = useState('App')
  const [conteinerStyleState, setConteinerStyleState] = useState('')
  return (
    <>
      <div className={['container', conteinerStyleState].join(' ')}>
        <div className="content">
          <div className={state}>
            <div className="circle-container">
              <div className="circle">
                <button
                  className="close"
                  onClick={() =>
                    setConteinerStyleState((state) => (state = ''))
                  }
                >
                  <i className="fas fa-times"></i>
                </button>
                <button
                  className="open"
                  onClick={() =>
                    setConteinerStyleState((state) => (state = 'show-nav'))
                  }
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>
            </div>
            <Header />
            <Router>
              <Routes>
                <Route
                  path="/"
                  element={[<Main key={1} st={setState} />, <Aside key={2} />]}
                />
                <Route
                  path="/Projects"
                  element={<MainProjects st={setState} />}
                />
                <Route
                  path="/Certificates"
                  element={<MainCertificates st={setState} />}
                />
              </Routes>
            </Router>
            <Footer />
          </div>
        </div>
      </div>
      <Nav click={() => setConteinerStyleState((state) => (state = ''))} />
    </>
  )
}

export default App
