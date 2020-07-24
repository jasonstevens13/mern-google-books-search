import React from "react";
import { Link } from "react-router-dom";

function Nav() {


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item text-white">
            <a className="nav-link">
              <Link to="/search">
                <div className="nav-item text-white">
                  Search
                </div>
              </Link>
            </a>
          </li>
          <li className="nav-item text-white">
            <a className="nav-link">
              <Link to="/saved">
                <div className="nav-item text-white">
                  Saved
                </div>
              </Link>
            </a>
          </li>
        </ul>
      </div>
    </nav >
  );
}

export default Nav;
