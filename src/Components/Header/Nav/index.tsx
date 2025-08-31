import React    from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

interface NavProps {
  reset: () => void;
}

const Nav: React.FC<NavProps> = (props) => {
  const { reset } = props;

  return (
    <nav className="castomNav">
      <ul>
        <li>
          <i className="fas fa-user-alt"></i>
          <Link to="/" onClick={reset}>
            About me
          </Link>
        </li>
        <li>
          <i className="bi bi-journal-code"></i>
          <Link to="/Projects" onClick={reset}>
            Projects
          </Link>
        </li>
        <li>
          <i className="bi bi-patch-check-fill"></i>
          <Link to="/Certificates" onClick={reset}>
            Certificates
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
