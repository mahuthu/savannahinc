import React from "react";
import classes from "./Styles.module.css";
import { NavLink } from "react-router-dom";
import logoImage from "../Dataset/4.png"
const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className={"container " + classes.footer}>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-12">
              <ul>
                <h5>Contact Information</h5>
                <li>Savannah Inc</li>
                <li> Kahawa Sukari, Thika Road,</li>
                <li>Nairobi, Kenya</li>
                <li>Phone1: 0793704217</li>
                <li>Phone2: 0726258462</li>
                <li>Email: info@savannahinc.com</li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-3 col-12">
              <ul>
                <h5>Quick Links</h5>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/digital">Digital Prescence Services</NavLink>
                </li>
                <li>
                  <NavLink to="/business">Business Solution Services</NavLink>
                </li>
                <li>
                  <NavLink to="/analytics">Analytics, ML and AI Services</NavLink>
                </li>
                <li>
                  <NavLink to="/Blog">Blog</NavLink>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-3 col-12">
              <ul>
                <h5>Our Solutions</h5>
                <li><NavLink to="/website">Website Design and Development</NavLink></li>
                <li><NavLink to="/social">Social Media Management</NavLink></li>
                <li><NavLink to="/business">Management Softwares</NavLink></li>
                <li><NavLink to="/chatbot">Chatbots</NavLink></li>
                <li><NavLink to="/recommend">Recommendation Engines</NavLink></li>
                <li><NavLink to="/collection">Data collection and annotation</NavLink></li>
                <li><NavLink to="/customer">Customer Analytics</NavLink></li>
                <li><NavLink to="/marketing">Marketing Analytics</NavLink></li>
                <li><NavLink to="/training">Training and Consultation</NavLink></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <img src={logoImage} alt="Logo" className="img-fluid" style={{ width: "50%", height: "auto", marginLeft:"40px" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{color: "white"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <p>
                &copy; 2024 Savannah Inc, All Rights Reserved. | Privacy
                Policy | Terms
              </p>
            </div>

            <div className="col-lg-6 col-12 text-center text-lg-end text-md-end text-sm-center ">
              <h4>
                 <i className="fab fa-facebook-f ms-3   "></i>
                <i className="fab fa-instagram   ms-3 "></i>
                <i className="fab fa-linkedin   ms-3 "></i>
                <i className="fab fa-twitter-square  ms-3  "></i>
                <i className="fab fa-youtube   ms-3 "></i>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
