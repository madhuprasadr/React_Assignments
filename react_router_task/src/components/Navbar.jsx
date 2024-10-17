import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="/fullstack">Full Stack Development</Link>
        </li>
        <li>
          <Link to="/datascience">Data Science</Link>
        </li>
        <li>
          <Link to="/cybersecurity">Cyber Security</Link>
        </li>
        <li>
          <Link to="/career">Career</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
