import Home from './Pages/Home';
import Digital from './Pages/Digital';
import React from 'react';
import Login from "./Pages/Login";
import Business from './Pages/Business';
import AboutUs from './Pages/AboutUs';
import Website from './Pages/Website1';
import Analytics from "./Pages/Analytics";
import Whatsapp from "./Pages/Whatsapp1";
import Chatbot from "./Pages/Subservices/Chatbot";
import Custom from "./Pages/Custom1";
import Model1 from "./Pages/Model1";
import Social from "./Pages/Social1";
import Training from "./Pages/Training1";
import Annotation from "./Pages/Annotation1";
import Crm from "./Pages/Subservices/Crm";
import Erp from "./Pages/Subservices/Erp";
import Ims from "./Pages/Subservices/ims";
import Pms from "./Pages/Subservices/Pms";
import Lms from "./Pages/Subservices/Lms";
import Scm from "./Pages/Subservices/Scm";
import Training1 from "./Pages/Subservices/Training";
import Collection from "./Pages/Subservices/Collection"
import Consult from "./Pages/Subservices/Consult";
import Marketing from "./Pages/Subservices/Marketing";
import Recommend from "./Pages/Subservices/Recommend";
import Customer from "./Pages/Subservices/Customer";
import Blog from "./Pages/Blog";
import Cont from "./Pages/Contact";
import BlogDetail from "./Pages/Blogdetail";
import Pos from "./Pages/Subservices/pos";




import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/digital" element={<Digital/>} />
        <Route path="/business" element={<Business />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/website" element={<Website/>} />
        <Route path="/analytics" element={<Analytics/>} />
        <Route path="/whatsapp" element={<Whatsapp/>} />
        <Route path="/chatbot" element={<Chatbot/>} />
        <Route path="/custom" element={<Custom/>} />
        <Route path="/model" element={<Model1/>} />
        <Route path="/social" element={<Social/>} />
        <Route path="/training" element={<Training/>} />
        <Route path="/annotation" element={<Annotation/>} />
        <Route path="/crm" element={<Crm />} />
        <Route path="/erp" element={<Erp />} />
        <Route path="/ims" element={<Ims />} />
        <Route path="/pms" element={<Pms />} />
        <Route path="/pos" element={<Pos />} />
        <Route path="/lms" element={<Lms />} />
        <Route path="/scm" element={<Scm />} />
        <Route path="/training1" element={<Training1 />} />
        <Route path = "/collection" element = {<Collection/>}/>
        <Route path = "/consult" element = {<Consult/>}/>
        <Route path = "/marketing" element = {<Marketing/>}/>
        <Route path = "/recommend" element = {<Recommend/>}/>
        <Route path = "/customer" element = {<Customer/>}/>
        <Route path = "/blog" element = {<Blog/>}/>
        <Route path="/blogs/:id" element={<BlogDetail/>} />

        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Cont />} />
        {/*<Route path="/register" element={<Register />} /> */}
      </Routes>
    </Router>
  );
};
export default App;

