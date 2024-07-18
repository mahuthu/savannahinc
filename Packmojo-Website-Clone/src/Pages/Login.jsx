import React from "react";
import Navbar from "../Components/Navbar/Navbar";

import LoginPage from "../Components/Login";
import Footer from "../Components/Footer"
import ContactStrip from "../Components/strip/strip";
const Login = () => {
  return (
    <div className="App">
      <Navbar />
      <ContactStrip/>
      <LoginPage />
      <Footer/>
    </div>
  );
};

export default Login;
