import React from "react";
import Animate from "react-smooth";
import Particles from "react-particles-js";
import particles from "../../constants/particle";
import { Container, Button } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";
import { Link, scroller } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Home.css";

function Home() {
  const scrolTo = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      spy: true,
      smooth: true,
    });
  };
  return (
    <section name="home" id="home">
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
              <Button
                variant="outline-light"
                size="lg"
                onClick={() => {
                  scrolTo("about");
                }}
              >
                <a
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                  onClick={() => {
                    scrolTo("about");
                  }}
                >
                  About
                </a>
              </Button>
              &nbsp;
              <Button
                variant="outline-light"
                size="lg"
                onClick={() => {
                  scrolTo("contact");
                }}
              >
                <a
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                  onClick={() => {
                    scrolTo("contact");
                  }}
                >
                  Contant
                </a>
              </Button>
            </div>
            <div className="social-icons">
              <a
                className="fb mr-4"
                href="https://www.facebook.com/andrew.hany.94651"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://github.com/AndrewHany2"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FontAwesomeIcon className="git" icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/andrew-hany-5092151ba/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
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
