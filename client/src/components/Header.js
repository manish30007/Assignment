import React from "react";
import {Link, useLocation} from 'react-router-dom'
const Header = () => {
  const location=useLocation();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand mx-3" to="/">
         Sellers
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
            </ul>
             {location.pathname==="/"?
              <div className="mx-1 my-1">
              <Link to="/login">
              <button className="btn btn-primary" type="submit">
             Login
              </button>
              </Link> 
              </div>
:
              <div className="mx-1 my-1">
              <Link to="/">
              <button className="btn btn-primary" type="submit">
               Register
              </button>
              </Link> 
              </div>
}

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
