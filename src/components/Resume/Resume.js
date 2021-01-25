import React from "react";
import Head from "../Head/Head";
import "./Resume.css";

function Resume(props) {
  return (
    <section id="resume" className="section py-5">
      <div className="container px-lg-5">
        <Head backText="SUMMARY" frontText="Resume" />
        <div className="row  d-flex justify-content-center text-alignment-center">
          <div className="col-md-6">
            <h2 className="text-6 font-weight-600 mb-4 text-center">
              My Education
            </h2>
            <div className="bg-white border border-info rounded p-4 mb-4">
              <p className="badge badge-primary my-color-background text-2 font-weight-400">
                2020
              </p>
              <h3 className="text-5">Computer Engineering</h3>
              <p className="text-danger">Tanta University</p>
              <p className="mb-0">
                Faculty of engineering, Computer and automatic control
              </p>
              <p>Grade: good</p>
              <p className="mb-0">
                Graduation project : Web scraper code generator
              </p>
              <p>Grade: excellent</p>
            </div>
          </div>
        </div>
        <h2 className="text-6 font-weight-600 mt-4 mb-4">My Skills</h2>
        <div className="row mb-5">
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item border border-info">HTML</li>
              <li className="list-group-item border border-info border-top-0 border-bottom-0">
                CSS
              </li>
              <li className="list-group-item border border-info border-bottom-0">
                JavaScript
              </li>
              <li className="list-group-item border border-info border-bottom-0">
                React, Hooks
              </li>
              <li className="list-group-item border border-info mb-3">Redux</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item border border-info border-bottom-0">
                Node
              </li>
              <li className="list-group-item border border-info">
                Restful api
              </li>
              <li className="list-group-item border border-info border-top-0 border-bottom-0">
                MongoDB
              </li>
              <li className="list-group-item border border-info border-bottom-0">
                Web scraping
              </li>
              <li className="list-group-item border border-info">C#</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
