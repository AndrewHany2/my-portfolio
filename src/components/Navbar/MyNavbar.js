import React, { useState, useEffect } from "react";
import { SidebarData } from "./SidebarData";
import { Link } from "react-scroll";
import { Nav, Navbar } from "react-bootstrap";
import Animate from "react-smooth";
import "./Navbar.css";

function MyNavbar(props) {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 0.2 * window.innerHeight) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  });
  return (
    <>
      <Animate to="1" from="0" attributeName="opacity">
        <Navbar
          className={navbar ? "navb navbar-active" : "navb"}
          fixed="top"
          bg="dark"
          variant="dark"
          expand="md"
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navb">
              {SidebarData.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  spy={true}
                  smooth={true}
                  duration={800}
                >
                  <Nav.Link className="navbar-item mx-2 px-2">
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </Nav.Link>
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Animate>
      {/* ) : (
        <nav className={props.sidebar ? "nav-menu active-nav" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle-2">
              <Link
                to="#"
                onClick={props.onToggleSidebar}
                className="menu-bars p-3"
              >
                <BsIcons.BsBoxArrowInUp size={20} />
              </Link>
            </li>
            {SidebarData.map((item, index) => (
              <Link
                className="nav-text"
                key={index}
                to={item.path}
                spy={true}
                smooth={true}
                duration={800}
              >
                <li key={index} className=" m-3 p-3">
                  {item.icon}
                  <span className="ml-3">{item.title}</span>
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      )} */}
    </>
  );
}

export default MyNavbar;
