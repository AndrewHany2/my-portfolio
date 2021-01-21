import React from "react";

function Footer() {
  return (
    <footer id="footer" class="section">
      <div class="container px-lg-5 py-lg-5">
        <div class="row">
          <div class="col-lg-6 text-center text-lg-left">
            <p class="mb-3 mb-lg-0">
              Copyright © 2020 <a href="#">Andrew</a>. All Rights Reserved.
            </p>
          </div>
          <div class="col-lg-6">
            <ul class="nav nav-separator justify-content-center justify-content-lg-end">
              <li class="nav-item">
                {" "}
                <a
                  class="nav-link"
                  data-toggle="modal"
                  data-target="#terms-policy"
                  href="#"
                >
                  Terms &amp; Policy
                </a>
              </li>
              <li class="nav-item">
                {" "}
                <a
                  class="nav-link"
                  data-toggle="modal"
                  data-target="#disclaimer"
                  href="#"
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
