import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImage from "../../Dataset/7.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light px-0">
      <div className="container-fluid " >
        <Link className="navbar-brand" to="/">
          {" "}
          <img src={logoImage} alt="Logo" width="45" height="45" />{" "}
          <b style = {{fontSize:"19px"}}> Savannah Inc. </b>{" "}
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
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 " >
          <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">
                About Us
              </Link>
            </li>

              <li className="nav-item dropdown">
                <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Digital Presence Services
              </Link>
              
              <ul className="dropdown-menu">
                
                <li>
                  <Link className="dropdown-item" to="/website">
                 Website Development:
                  </Link>
                </li>
                
                <li>
                  <Link className="dropdown-item" to="/social">
                  Social Media Management
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />{" "}
                </li>
                <li>
                  <Link className="dropdown-item" to="/digital">
                    Explore All Services
                  </Link>
                </li>
                
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Business Solutions Services
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/crm">
                  CRM Solutions
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/erp">
                  ERP Solutions
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/ims">
                  Inventory Management Systems
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/pos">
                  Point of Sale Solutions
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/pms">
                  Project Management Systems
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/lms">
                  Learning Management Systems
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/scm">
                  Supply Chain Management Systems
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/training1">
                  Training and Consultation
                  </Link>
                </li>
                
                <li>
                  <Link className="dropdown-item" to="/">
                
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />{" "}
                </li>
                <li>
                  <Link className="dropdown-item" to="/business">
                    Explore All Services
                  </Link>
                </li>
                
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Analytics, ML And AI Services
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/chatbot">
                  Chatbot Development
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/recommend">
                  Recommendation Systems
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/collection">
                  Data  collection and annotation
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/customer">
                  Customer Analytics
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/marketing">
                  Marketing Analytics
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/consult">
                  Training and Consultation
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />{" "}
                </li>
                <li>
                  <Link className="dropdown-item" to="/analytics">
                    Explore All Services
                  </Link>
                </li>
                
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            
            <li>
            <Link to="/contact" className="btn btn-success">
              Contact Us
            </Link>
          </li>
          </ul>
          <form className="d-flex" role="search">
            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            <Link className="dropdown-item" to="/login" style = {{backgroundColor:"#fff", color:"#444"}}>
              Login
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
