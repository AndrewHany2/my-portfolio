import React from "react";
import Head from "../Head/Head";
import "./About.css";

function About() {
  return (
    <section id="about" className="section py-5">
      <div className="container px-lg-5">
        <Head backText="ABOUT ME" frontText="Know Me More" />
        <div className="row">
          <div className="col-lg-8 text-center text-lg-left">
            <h2 className="text-7 font-weight-600 mb-3">
              I'm{" "}
              <span style={{ margin: 0 }} className="my-color">
                Andrew Hany,
              </span>{" "}
              a Web Developer
            </h2>
            <p>
              I help you build website for your business at an affordable price.
              We will guarantee exceptional results while working with our
              dedicated team. when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <p>
              Delivering work within time and budget which meets client’s
              requirements is our moto.
            </p>
          </div>
          <div className="col-lg-4 mt-5 mt-lg-0">
            <div className="pl-4">
              <ul className="list-style-2">
                <li>
                  <span className="font-weight-600 mr-2">Name:</span>Andrew Hany
                </li>
                <li>
                  <span className="font-weight-600 mr-2">Email:</span>
                  <a className="my-color" href="mailto:andrewhany260@gmail.com">
                    andrewhany260@gmail.com
                  </a>
                </li>
                <li>
                  <span className="font-weight-600 mr-2">Age:</span>25
                </li>
                <li className="border-0">
                  <span className="font-weight-600 mr-2">From:</span>
                  Egypt
                </li>
              </ul>
              <a className="btn my-button my-color-background my-color-border rounded-pill smooth-scroll">
                Download CV
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
