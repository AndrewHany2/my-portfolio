import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer id="footer" className="section">
      <div className="container px-lg-5 py-lg-5">
        <div className="row">
          <div className="col-lg-6 text-center text-lg-left">
            <p className="mb-3 mb-lg-0">
              Copyright © 2020 <a href="/#">Andrew</a>. All Rights Reserved.
            </p>
          </div>
          <div className="col-lg-6">
            <ul className="nav nav-separator justify-content-center justify-content-lg-end">
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link"
                  data-toggle="modal"
                  data-target="#terms-policy"
                  href="/#"
                >
                  Terms &amp; Policy
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link"
                  data-toggle="modal"
                  data-target="#disclaimer"
                  href="/#"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
