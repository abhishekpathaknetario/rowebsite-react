import React from "react";

import Brand1 from "../assets/Images/brand1.png";
import Brand2 from "../assets/Images/brand2.png";
import Brand3 from "../assets/Images/brand3.png";
import Brand4 from "../assets/Images/brand4.png";
import Brand5 from "../assets/Images/brand5.png";
import Brand6 from "../assets/Images/brand6.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // React Font Awesome component
import { faPhone } from "@fortawesome/free-solid-svg-icons"; // Specific icons
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import "./BrandsArea.css";
import "./btn.css";

const BrandsArea = () => {
  return (
    <div className="brands-area d-flex my-3">
      <div className="container d-flex flex-column align-items-center">
        <p className="mt-5 mb-4 fw-bold fs-3 text-center text-primary">
          Brand Deals For Services
        </p>

        <div className="brands-container position-relative overflow-hidden">
          <div className="brands sliding d-flex">
            {[Brand1, Brand2, Brand3, Brand4, Brand5, Brand6].map((brand, index) => (
              <div className="brand-item col-2" key={index}>
                <img src={brand} alt={`Brand ${index + 1}`} className="img-fluid" />
              </div>
            ))}
            {[Brand1, Brand2, Brand3, Brand4, Brand5, Brand6].map((brand, index) => (
              <div className="brand-item col-2" key={`duplicate-${index}`}>
                <img src={brand} alt={`Brand ${index + 1}`} className="img-fluid" />
              </div>
            ))}
          </div>
        </div>

        <div className="contact-buttons d-flex gap-3 align-items-center mt-4">
          <a
            className="btncall"
            href="tel:+918006225800"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn d-flex align-items-center px-4 py-2 btn-primary rounded-pill shadow">
              <FontAwesomeIcon icon={faPhone} />
              <span className="ms-2">Call Us</span>
            </button>
          </a>

          <a
            href="https://wa.me/+918006225800"
            className="btnwhats"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn d-flex align-items-center px-4 py-2 btn-success rounded-pill shadow">
              <FontAwesomeIcon icon={faWhatsapp} />
              <span className="ms-2">Whatsapp</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrandsArea;
