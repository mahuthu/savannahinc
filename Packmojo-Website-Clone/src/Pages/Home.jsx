import HomeContent from "../Components/HomeContent";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import "../Components/Styles.module.css";
import Contact from "../Components/Contacts/Contact";
import React from "react"

const Home = () => {
    return (
        <div className="App">
    
            
            <Navbar />
            
            <HomeContent />
            
            <Contact/>
            <Footer />
    
        </div>
    );
    }

export default Home;