import React from 'react'
import './Nav.css'

const Nav = ({ click }) => {
  return (
    <nav className="castomNav">
      <ul>
        <li>
          <i className="fas fa-user-alt"></i>
          <a href="#" onClick={click}>
            About me
          </a>
        </li>
        <li>
          <i className="bi bi-journal-code"></i>
          <a href="#Projects" onClick={click}>
            Projects
          </a>
        </li>
        <li>
          <i className="bi bi-patch-check-fill"></i>
          <a href="#Certificates" onClick={click}>
            Certificates
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
