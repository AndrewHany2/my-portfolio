import React from "react";
import Head from "../Head/Head";
import { FaRegClone } from "react-icons/fa";
import { BiWorld, BiMobile, BiCodeCurly, BiQuestionMark } from "react-icons/bi";
import { FcAcceptDatabase } from "react-icons/fc";
import { CgPerformance } from "react-icons/cg";

import "./MyServices.css";

function MyServices(props) {
  return (
    <section id="services" class="section bg-light py-lg-5">
      <div className="container px-lg-5">
        <Head backText="SERVICES" frontText="What I Do?"></Head>
        <div class="row">
          <div class="col-lg-11 mx-auto">
            <div class="row">
              <div class="col-md-6">
                <div className="box mb-5">
                  <div className="box-icon text-primary bg-white shadow-sm rounded">
                    <BiWorld class="my-color" size={27}></BiWorld>
                  </div>
                  <h3 className="d-inline ml-2">Web Development</h3>
                </div>
              </div>
              <div class="col-md-6">
                <div className="box mb-5">
                  <div className="box-icon text-primary bg-white shadow-sm rounded">
                    <BiMobile class="my-color" size={30}></BiMobile>
                  </div>
                  <h3 className="d-inline ml-2">Fully Responsive Design</h3>
                </div>
              </div>
              <div class="col-md-6">
                <div className="box mb-5">
                  <div className="box-icon text-primary bg-white shadow-sm rounded">
                    <BiCodeCurly class="my-color" size={28}></BiCodeCurly>
                  </div>
                  <h3 className="d-inline ml-2">
                    Clean and Professional codes
                  </h3>
                </div>
              </div>
              <div class="col-md-6">
                <div className="box mb-5">
                  <div className="box-icon text-primary bg-white shadow-sm rounded">
                    <CgPerformance class="my-color" size={27}></CgPerformance>
                  </div>
                  <h3 className="d-inline ml-2">High Performance Page Load</h3>
                </div>
              </div>
              <div class="col-md-6">
                <div className="box mb-5">
                  <div className="box-icon text-primary bg-white shadow-sm rounded">
                    <FaRegClone class="my-color" size={26}></FaRegClone>
                  </div>
                  <h3 className="d-inline ml-2">Smooth Transition Effects</h3>
                </div>
              </div>
              <div class="col-md-6">
                <div className="box mb-5">
                  <div className="box-icon text-primary bg-white shadow-sm rounded">
                    <BiQuestionMark class="my-color" size={36}></BiQuestionMark>
                  </div>
                  <h3 className="d-inline ml-2">Problem Solving</h3>
                </div>
              </div>
              <div class="col-md-6">
                <div className="box mb-5">
                  <div className="box-icon text-primary bg-white shadow-sm rounded">
                    <FcAcceptDatabase
                      class="my-color"
                      size={30}
                    ></FcAcceptDatabase>
                  </div>
                  <h3 className="d-inline ml-2">Web scraping</h3>
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
