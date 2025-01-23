import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation(); // get the current path

  return (
    <div className="justify-content-between d-flex border-bottom">
      <div className="mt-2">
        <a className="navbar-brand" href="/">
          <img
            width="100"
            height="100"
            className="img-fluid"
            src="src/assets/test_icon.png"
            alt="Logo"
          />
        </a>
      </div>
      <div className="mt-5">
        {pathname !== "/" && (
          <Link
            to="/"
            className="mx-3 p-1 fs-5 fs-sm-3 text-decoration-none font-color contact-links"
          >
            home
          </Link>
        )}
        {pathname !== "/about" && (
          <Link
            to="/about"
            className="mx-3 p-1 fs-5 fs-sm-3 text-decoration-none font-color contact-links"
          >
            who?
          </Link>
        )}
        {pathname !== "/contact" && (
          <Link
            to="/contact"
            className="mx-3 p-1 fs-5 fs-sm-3 text-decoration-none font-color contact-links"
          >
            points of contact
          </Link>
        )}
      </div>
    </div>
  );
}