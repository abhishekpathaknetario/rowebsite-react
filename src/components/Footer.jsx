import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import "./Footer.css";

import Logo from "../assets/Images/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="footer p-3 p-md-5" style={{ background: "#EAEAEA" }}>
        <div className="top d-flex justify-content-around ">
          <div className="left">
            <span className="logo">
              <img src={Logo} />
            </span>
            <span className="description">
              <p
                className="w-md-50 w-75  pt-2"
                style={{ textAlign: "justify" }}
              >
                Your trusted destination for high-quality water purifiers in
                Noida. We provide a wide range of top brands, expert guidance,
                and reliable after-sales support to ensure safe and clean
                drinking water for your home and office.
              </p>
            </span>
          </div>
          <div className="right">
            <div className=" d-flex flex-column flex-md-row  justify-content-between align-items-start gap-3 footer-links py-4  px-lg-4 gap-lg-5 fw-semibold">
              <div className=" ">
                <Link
                  className={(e) => {
                    return e.isActive
                      ? "nav-link text-primary border-2 border-bottom border-primary"
                      : "nav-link ";
                  }}
                  to="/"
                >
                  Home
                </Link>
              </div>
              <div className="">
                <Link
                  className={(e) => {
                    return e.isActive
                      ? "nav-link text-primary border-2 border-bottom border-primary"
                      : "nav-link ";
                  }}
                  to="/services"
                >
                  Services
                </Link>
              </div>
              <div className="">
                <Link
                  className={(e) => {
                    return e.isActive
                      ? "nav-link text-primary border-2 border-bottom border-primary"
                      : "nav-link ";
                  }}
                  to="/spareparts"
                >
                  SpareParts
                </Link>
              </div>
              <div className="">
                <Link
                  className={(e) => {
                    return e.isActive
                      ? "nav-link text-primary border-2 border-bottom border-primary"
                      : "nav-link ";
                  }}
                  to="/contactus"
                >
                  Contact
                </Link>
              </div>
              <div className="">
                <Link
                  className={(e) => {
                    return e.isActive
                      ? "nav-link text-primary border-2 border-bottom border-primary"
                      : "nav-link ";
                  }}
                  to="/ratings"
                >
                  Ratings
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className=" flex-column  d-flex align-items-sm-start align-items-md-end">
            <div>
              <span className="">
                <p className="px-2">Follow us</p>
              </span>
              <span className="d-flex align-items-end ">
                <button className="footer-icon d-flex">
                  <a href="https://www.facebook.com/" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </button>
                <button className="d-flex footer-icon">
                  <a href="https://x.com/__x" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </button>
                <button className="d-flex footer-icon">
                  <a href="https://instagram.com" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </button>
              </span>
            </div>
          </div>
        </div>

        <div className="border-top text-center pt-4  border-secondary mt-5">
          <p>
            All rights reserved by{" "}
            <span className="text-primary">© Netario innovations</span> private
            limited
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
