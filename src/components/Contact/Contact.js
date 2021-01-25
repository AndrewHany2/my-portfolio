import React, { useState } from "react";
import Head from "../Head/Head";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { IoMdCall } from "react-icons/io";
import { MdMail } from "react-icons/md";
import {
  FaAddressCard,
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import "./Contact.css";
import dotenv from "dotenv";

dotenv.config();

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [responseSucceded, setResponseSucceded] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Andrew",
      feedback: note,
    };
    emailjs
      .send(
        process.env.REACT_APP_SERVICES_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      )
      .then(
        function (response) {
          toast.success("Your message has successfully sent!", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
          console.log("SUCCESS!", response.status, response.text);
          setResponseSucceded(true);
        },
        function (err) {
          toast.error("Your message was not able to be sent");
          setResponseSucceded(false);
          setError(err);
        }
      );
  };
  return (
    <section name="contant" id="contact" className="section pt-5 pb-5 bg-light">
      <div className="container px-lg-5">
        <Head backText="CONTACT" frontText="Get in Touch"></Head>
        <div className="row">
          <div className="col-md-4 col-xl-3 order-1 order-md-0 text-center text-md-left mt-5 p-0">
            <p className="my-color text-3 mb-3">
              <FaAddressCard className="mr-2" size={25} />
              Tanta, Egypt
            </p>
            <p className="my-color text-3 mb-3">
              <IoMdCall size={25} />
              <a
                href="tel:+20 01276562945"
                className="my-color ml-1 text-decoration-none"
              >
                (‎+20) 01276562945
              </a>
            </p>
            <p className="my-color text-3 mb-3">
              <MdMail size={25} />
              <a
                className="my-color ml-2 text-decoration-none"
                href="mailto:andrewhany260@gmail.com"
              >
                andrewhany260@gmail.com
              </a>
            </p>
            <p className="my-color text-3 mb-3">
              <FaFacebookSquare size={25} />
              <a
                href="https://www.facebook.com/andrew.hany.94651"
                target="_blank"
                rel="noopener noreferrer"
                className="my-color ml-2 text-decoration-none"
              >
                Facebook
              </a>
            </p>
            <p className="my-color text-3 mb-3">
              <FaLinkedin size={25} />
              <a
                href="https://www.linkedin.com/in/andrew-hany-5092151ba"
                target="_blank"
                rel="noopener noreferrer"
                className="my-color ml-2 text-decoration-none"
              >
                LinkedIn
              </a>
            </p>
            <p className="my-color text-3 ">
              <FaGithub size={25} />
              <a
                href="https://github.com/AndrewHany2"
                target="_blank"
                rel="noopener noreferrer"
                className="my-color ml-2 text-decoration-none"
              >
                Github
              </a>
            </p>
          </div>
          <div className="col-md-8 col-xl-9 order-0 order-md-1">
            <h2 className="mb-3 text-3 text-uppercase text-center text-md-left">
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
              <div className="form-group">
                <textarea
                  name="form-message"
                  className="form-control"
                  rows="5"
                  required=""
                  placeholder="Tell us more about your needs........"
                  onChange={(e) => setNote(e.target.value)}
                ></textarea>
              </div>
              {!responseSucceded && !error ? (
                <p className="text-center mt-4 mb-0">
                  <button
                    id="submit-btn"
                    className="btn my-button my-color-background my-color-border rounded-pill d-inline-flex"
                    type="submit"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    Send Message
                  </button>
                </p>
              ) : null}
            </form>
            {responseSucceded ? (
              <div className="alert alert-info" role="alert">
                Thanks for your note, Sent successfully
              </div>
            ) : error ? (
              <div className="alert alert-danger" role="alert">
                {error.text}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
