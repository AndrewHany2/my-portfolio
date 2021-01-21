import React from "react";
import Animate from "react-smooth";
import Particles from "react-particles-js";
import particles from "../../constants/particle";
import { Container, Button } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Home.css";

function Home() {
  return (
    <section id="home">
      <div className="home-main">
        <Animate to="1" from="0" attributeName="opacity">
          <Particles params={particles} className="particle" />
          <Container className="home-header" fluid={true}>
            <h1>Hello!</h1>
            <h2>I am Andrew Hany</h2>
            <h4>
              <ReactTypingEffect
                text="Web Developer || Software Engineer ... "
                speed="100"
                eraseDelay="500000"
              />
            </h4>
            <div className="buttons">
              <Button variant="outline-light" size="lg">
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  About Me
                </Link>
              </Button>{" "}
              &nbsp;
              <Button variant="outline-light" size="lg">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/contact"
                >
                  Contact Me
                </Link>
              </Button>
            </div>
            <div className="social-icons">
              <a
                className="fb"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="git" icon={faGithub} />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="twitter" icon={faTwitter} />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="insta" icon={faInstagram} />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
              </a>
            </div>
          </Container>
        </Animate>
      </div>
    </section>
  );
}

export default Home;
