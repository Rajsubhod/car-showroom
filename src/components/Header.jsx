import React from 'react';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container-fluid d-flex align-items-center">
        <div className="bg-danger text-white d-flex align-items-center px-3 py-1 rounded">
          <img
            src="/logo.png"
            alt="Auto World logo"
            width="32"
            height="32"
            className="me-2"
          />
          <span className="fw-bold">Auto World</span>
        </div>

        <ul className="nav mx-auto">
          <li className="nav-item">
            <span className="nav-link">Offers</span>
          </li>
          <li className="nav-item">
            <span className="nav-link">Contact us</span>
          </li>
        </ul>

        <button type="button" className="btn bg-dark text-white ms-auto">
          Sign up
        </button>
      </div>
    </nav>
  );
}

export default Header;
