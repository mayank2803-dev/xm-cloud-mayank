import React from 'react';
import Link from 'next/link';
const CustomNavigation = (): JSX.Element => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/register">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default CustomNavigation;
