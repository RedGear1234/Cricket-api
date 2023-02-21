import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/Series">Series</Link>
        </li>
        <li>
          <Link to="/Fixtures">Fixtures</Link>
        </li>
        <li>
          <Link to="/Results">Results</Link>
        </li>
        <li>
          <Link to="/Scorecard">Scorecard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
