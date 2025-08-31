import { useCallback, useState } from 'react';
import { Routes, Route }         from 'react-router-dom';

import './App.css';

import Aside            from './Components/Aside/Aside';
import Header           from './Components/Header';
import Nav              from './Components/Header/Nav';
import Footer           from './Components/Footer/Footer';
import Main             from './Components/Main/';
import MainCertificates from './Components/Main/MainCertificates';
import MainProjects     from './Components/Main/MainProjects';

function App() {
  const [state, setState]                             = useState('App');
  const [containerStyleState, setContainerStyleState] = useState('');

  const resetStyles = useCallback(() => {
    setContainerStyleState('');
  }, []);

  return (
    <>
      <div className={['container', containerStyleState].join(' ')}>
        <div className="content">
          <div className={state}>
            <div className="circle-container">
              <div className="circle">
                <button
                  className="close"
                  onClick={resetStyles}
                >
                  <i className="fas fa-times"></i>
                </button>
                <button
                  className="open"
                  onClick={() =>
                    setContainerStyleState('show-nav')
                  }
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>
            </div>
            <Header />
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
            <Footer />
          </div>
        </div>
      </div>
      <Nav reset={resetStyles} />
    </>
  );
}

export default App;
