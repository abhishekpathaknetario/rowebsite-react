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
    <div className="d-flex my-3">
      <div className="container  d-flex flex-column align-items-center  ">
        <p className="mt-5 mb-4 fw-bold  fw-semibold fs-3 text-center text-primary ">
          Brand Deals For Services
        </p>

        <div className="brands-container ">
          <div className="brands  sliding">
            <div className="col-2">
              <img src={Brand1} alt="Brand 1" />
            </div>
            <div className="col-2">
              <img src={Brand2} alt="Brand 2" />
            </div>
            <div className="col-2">
              <img src={Brand3} alt="Brand 3" />
            </div>
            <div className="col-2">
              <img src={Brand4} alt="Brand 4" />
            </div>
            <div className="col-2">
              <img src={Brand5} alt="Brand 5" />
            </div>
            <div className="col-2">
              <img src={Brand6} alt="Brand 6" />
            </div>

            {/* Duplicate images for seamless scrolling */}
            <div className="col">
              <img src={Brand1} alt="Brand 1" />
            </div>
            <div className="col">
              <img src={Brand2} alt="Brand 2" />
            </div>
            <div className="col">
              <img src={Brand3} alt="Brand 3" />
            </div>
            <div className="col">
              <img src={Brand4} alt="Brand 4" />
            </div>
            <div className="col">
              <img src={Brand5} alt="Brand 5" />
            </div>
            <div className="col">
              <img src={Brand6} alt="Brand 6" />
            </div>
          </div>
        </div>

        <span className="px-0  px-lg-5 gap-3 d-flex align-items-center">
          <a className="btncall" href="tel:+918006225800" target="_blank" rel="noreferrer">
            <button className="btn gap-2 d-flex align-items-center my-3 px-3 container  btn-primary rounded-pill ">
              <FontAwesomeIcon icon={faPhone} />
              <span> Call Us</span>
            </button>
          </a>

          <a
            href=" https://wa.me/+918006225800"
            className="btnwhats"
            target="_blank"
          >
            <button className="btn gap-2 d-flex align-items-center my-3 px-3 container  btn-success rounded-pill ">
              <FontAwesomeIcon icon={faWhatsapp} />
              {" "}
              <span> Whatsapp</span>
            </button>
          </a>
        </span>
      </div>
    </div>
  );
};

export default BrandsArea;
