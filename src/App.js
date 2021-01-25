import React from "react";
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

// function useWindowSize() {
//   const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
//   useEffect(() => {
//     const handleResize = () => {
//       setSize([window.innerHeight, window.innerWidth]);
//     };
//     window.addEventListener("resize", handleResize);
//     // Clean up!
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
//   return size;
// }

function App() {
  return (
    <Router>
      <MyNavbar />
      <Home></Home>
      <About></About>
      <MyServices></MyServices>
      <Resume></Resume>
      <Contact></Contact>
      <Footer></Footer>
    </Router>
  );
}

export default App;
