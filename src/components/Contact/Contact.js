import React, { useState } from "react";
import Head from "../Head/Head";
import { IoMdCall } from "react-icons/io";
import { MdMail } from "react-icons/md";

function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  return (
    <section id="contact" className="section pt-5 pb-5 bg-light">
      <div className="container px-lg-5">
        <Head backText="CONTACT" frontText="Get in Touch"></Head>
        <div className="row">
          <div class="col-md-4 col-xl-3 order-1 order-md-0 text-center text-md-left mt-5 mt-md-0 p-0">
            <p className="my-color text-3 mb-1">
              <IoMdCall size={30} />
              <a className="my-color ml-1 text-decoration-none">
                (‎+20) 01276562945
              </a>
            </p>
            <p className="my-color text-3 mb-1">
              <MdMail size={25} />
              <a
                className="my-color ml-2 text-decoration-none"
                href="mailto:andrewhany260@gmail.com"
              >
                andrewhany260@gmail.com
              </a>
            </p>
          </div>
          <div className="col-md-8 col-xl-9 order-0 order-md-1 pl-5 pr-0">
            <h2 class="mb-3 text-3 text-uppercase text-center text-md-left">
              Send me a note
            </h2>
            <form>
              <div className="row">
                <div className="col-xl-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      required
                      placeholder="Name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      required
                      placeholder="Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <textarea
                  name="form-message"
                  class="form-control"
                  rows="5"
                  required=""
                  placeholder="Tell us more about your needs........"
                ></textarea>
              </div>
              <p class="text-center mt-4 mb-0">
                <a
                  id="submit-btn"
                  class="btn my-button my-color-background my-color-border rounded-pill d-inline-flex"
                  type="submit"
                >
                  Send Message
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
