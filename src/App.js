import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/Navbar/MyNavbar";
import "./App.css";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Contact from "./components/Contact/Contact";
import MyServices from "./components/MyServices/MyServices";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
    // Clean up!
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}

function App() {
  const [height, width] = useWindowSize();
  const [windowSize, setWindowsSize] = useState("large");
  const [sidebar, setSidebar] = useState(true);

  useEffect(() => {
    if (width <= 1000) {
      setSidebar(false);
      setWindowsSize("small");
    } else {
      setSidebar(true);
      setWindowsSize("large");
    }
  }, [width]);

  function onToggleSidebar() {
    setSidebar(!sidebar);
  }
  return (
    <Router>
      <MyNavbar
        windowSize={windowSize}
        sidebar={sidebar}
        onToggleSidebar={onToggleSidebar}
      />
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
