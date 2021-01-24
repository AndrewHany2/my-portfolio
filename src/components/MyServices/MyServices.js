import React from "react";
import Head from "../Head/Head";
import { FaRegClone } from "react-icons/fa";
import { BiWorld, BiMobile, BiCodeCurly, BiQuestionMark } from "react-icons/bi";
import { FcAcceptDatabase } from "react-icons/fc";
import { CgPerformance } from "react-icons/cg";

import "./MyServices.css";

function MyServices(props) {
  return (
    <section id="services" className="section bg-light py-lg-5">
      <div className="container px-lg-5">
        <Head backText="SERVICES" frontText="What I Do?"></Head>
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              <div className="col-md-6">
                <div className="box mb-5">
                  <div className="box-icon text-primary bg-white shadow-sm rounded">
                    <BiWorld className="my-color" size={27}></BiWorld>
                  </div>
                  <h3 className="d-inline ml-2">Web Development</h3>
                </div>
              </div>
              <div className="col-md-6">
                <div className="box mb-5">
                  <div className="box-icon text-primary bg-white shadow-sm rounded">
                    <FcAcceptDatabase
                      className="my-color"
                      size={30}
                    ></FcAcceptDatabase>
                  </div>
                  <h3 className="d-inline ml-2">Web scraping</h3>
                </div>
              </div>
              <div className="col-md-6">
                <div className="box mb-5">
                  <div className="box-icon text-primary bg-white shadow-sm rounded">
                    <BiMobile className="my-color" size={30}></BiMobile>
                  </div>
                  <h3 className="d-inline ml-2">Fully Responsive Design</h3>
                </div>
              </div>
              <div className="col-md-6">
                <div className="box mb-5">
                  <div className="box-icon text-primary bg-white shadow-sm rounded">
                    <BiCodeCurly className="my-color" size={28}></BiCodeCurly>
                  </div>
                  <h3 className="d-inline ml-2">
                    Clean and Professional codes
                  </h3>
                </div>
              </div>
              <div className="col-md-6">
                <div className="box mb-5">
                  <div className="box-icon text-primary bg-white shadow-sm rounded">
                    <CgPerformance
                      className="my-color"
                      size={27}
                    ></CgPerformance>
                  </div>
                  <h3 className="d-inline ml-2">High Performance Page Load</h3>
                </div>
              </div>
              <div className="col-md-6">
                <div className="box mb-5">
                  <div className="box-icon text-primary bg-white shadow-sm rounded">
                    <FaRegClone className="my-color" size={26}></FaRegClone>
                  </div>
                  <h3 className="d-inline ml-2">Smooth Transition Effects</h3>
                </div>
              </div>
              <div className="col-md-6">
                <div className="box mb-5">
                  <div className="box-icon text-primary bg-white shadow-sm rounded">
                    <BiQuestionMark
                      className="my-color"
                      size={36}
                    ></BiQuestionMark>
                  </div>
                  <h3 className="d-inline ml-2">Problem Solving</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyServices;
