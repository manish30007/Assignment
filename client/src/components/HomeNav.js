import React from 'react'

const HomeNav = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
       Sellers
        </a>
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
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
             Home
              </a>
            </li>
            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Listings
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    My Listing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Add Listing
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Opportunities
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Orders
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Active Order
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                   Return 
                  </a>
                </li>
               
                <li>
                  <a className="dropdown-item" href="#">
                    Cancellation
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Payment
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Payment Overview
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Previous Payment
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  
                  </a>
                </li>
              </ul>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li> */}
           
          </ul>
            
            <div className="mx-3 my-1" style={{}}>
            {/* <a>
            <button className="btn btn-outline-primary" type="submit">
           Log Out
            </button>
            </a>  */}
             <div className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle "
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                User
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                   Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
                
                
              </ul>
            </div>

            </div>


        </div>
      </div>
    </nav>
  </div>
  )
}

export default HomeNav
