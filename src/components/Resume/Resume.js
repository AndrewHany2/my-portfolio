import React from "react";
import Head from "../Head/Head";

function Resume(props) {
  return (
    <section id="resume" class="section py-5">
      <div class="container px-lg-5">
        <Head backText="SUMMARY" frontText="Resume" />
        <div class="row">
          <div class="col-md-6">
            <h2 class="text-6 font-weight-600 mb-4">My Education</h2>
            <div class="bg-white border rounded p-4 mb-4">
              <p class="badge badge-primary text-2 font-weight-400">2020</p>
              <h3 class="text-5">Computer Engineering</h3>
              <p class="text-danger">Tanta University</p>
              <p class="mb-0">
                Faculty of engineering, Computer and automatic control
              </p>
              <p>Grade: good</p>
              <p class="mb-0">
                Graduation project : Web scraper code generator
              </p>
              <p>Grade: excellent</p>
            </div>
          </div>
        </div>
        <h2 class="text-6 font-weight-600 mt-4 mb-4">My Skills</h2>
        <div class="row mb-5">
          <div class="col-md-6">
            <ul class="list-group my-color-border">
              <li class="list-group-item">HTML</li>
              <li class="list-group-item">CSS</li>
              <li class="list-group-item">JavaScript</li>
            </ul>
          </div>
          <div class="col-md-6">
            <ul class="list-group my-color-border">
              <li class="list-group-item">React</li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Morbi leo risus</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
