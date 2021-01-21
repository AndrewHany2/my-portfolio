import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Contact from "./components/Contact/Contact";
import MyServices from "./components/MyServices/MyServices";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";

function App() {
  const [sidebar, setSidebar] = useState(false);
  function onToggleSidebar() {
    setSidebar(!sidebar);
  }
  return (
    <Router>
      <Navbar sidebar={sidebar} onToggleSidebar={onToggleSidebar} />
      <div className={sidebar ? "app minus" : "app"}>
        <Home></Home>
        <About></About>
        <MyServices></MyServices>
        <Resume></Resume>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
