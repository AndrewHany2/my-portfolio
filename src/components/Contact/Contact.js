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
import { useFormik } from "formik";
dotenv.config();

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }
  if (!values.note) {
    errors.note = "Required";
  } else if (values.note.length < 10) {
    errors.note = "Must be 10 characters or more";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      note: "",
    },
    validate,
    onSubmit: (values) => {
      sendEmail(values);
    },
  });
  const [responseSucceded, setResponseSucceded] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (values) => {
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      to_name: "Andrew",
      feedback: values.note,
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
            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-xl-6">
                  <div className="form-group">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                    ></input>
                    {formik.errors.name ? (
                      <div>{formik.errors.name}</div>
                    ) : null}
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="form-group">
                    <input
                      id="name"
                      name="email"
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    ></input>
                    {formik.errors.email ? (
                      <div>{formik.errors.email}</div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  id="note"
                  name="note"
                  className="form-control"
                  rows="5"
                  placeholder="Tell us more about your needs........"
                  value={formik.values.note}
                  onChange={formik.handleChange}
                ></textarea>
                {formik.errors.note ? <div>{formik.errors.note}</div> : null}
              </div>
              {!responseSucceded && !error ? (
                <p className="text-center mt-4 mb-0">
                  <button
                    id="submit-btn"
                    className="btn my-button my-color-background my-color-border rounded-pill d-inline-flex"
                    type="submit"
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
