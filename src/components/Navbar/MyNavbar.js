import React from "react";
import * as BsIcons from "react-icons/bs";
import { SidebarData } from "./SidebarData";
import { Link } from "react-scroll";
import { Nav, Navbar } from "react-bootstrap";
import "./Navbar.css";

function MyNavbar(props) {
  return (
    <>
      {!props.sidebar || props.windowSize === "small" ? (
        <Navbar
          className="navb"
          fixed="top"
          bg="dark"
          variant="dark"
          expand="md"
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto navb">
              {props.windowSize === "large" ? (
                <Nav.Item className="menu-bars">
                  <Nav.Link>
                    <BsIcons.BsBoxArrowInLeft
                      onClick={props.onToggleSidebar}
                      size={20}
                    ></BsIcons.BsBoxArrowInLeft>
                  </Nav.Link>
                </Nav.Item>
              ) : null}
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
      ) : (
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
      )}
    </>
  );
}

export default MyNavbar;
