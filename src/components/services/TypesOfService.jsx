import React from "react";

import Icon1 from "../../assets/Images/services/icons/f1.png";
import Icon2 from "../../assets/Images/services/icons/f2.png";
import Icon3 from "../../assets/Images/services/icons/f3.png";
import Icon4 from "../../assets/Images/services/icons/f4.png";
import Icon5 from "../../assets/Images/services/icons/f5.png";
import Icon6 from "../../assets/Images/services/icons/f6.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import "./TypesOfService.css";
import Ratings from "../Ratings";

const TypesOfService = () => {
  return (
    <>
      <div className="container-area my-5  d-flex flex-column">
        <div className="typesservs">
          <h1 className="fw-bold">We Provide Six Types of Services</h1>
          <p>
            We offer a comprehensive range of water purifier services to cater
            to all your needs. Our services include:
          </p>
          <ul>
            <li>
              Ultrafiltration (UF): Ensuring superior filtration performance
              with expert servicing and genuine spare parts for UF systems.
            </li>{" "}
            <li>
              Reverse Osmosis (RO): Reliable maintenance, repair, and
              installation services to keep your RO system in top condition.
            </li>{" "}
            <li>
              Annual Maintenance Contract (AMC): Regular upkeep and care with
              our hassle-free AMC packages.
            </li>{" "}
            <li>
              Installation: Professional installation services for all types of
              water purifiers, ensuring optimal performance.
            </li>{" "}
            <li>
              Uninstallation: Safe and careful uninstallation of water purifiers
              as per your requirements.
            </li>
          </ul>
        </div>

        <div className="services  w-100  mb-5">
          <div className="row gaps-crds flex-nowrap my-2">
            <div className="col d-flex align-items-center ">
              <span className="right mx-2">
                <h1 className="service_no">01.</h1>
              </span>
              <span className="left ">
                <span className="top">
                  <img src={Icon1} />
                </span>
                <span className="bottom">
                  <h5>Ultrafiltration (UF)</h5>
                </span>
              </span>
            </div>{" "}
            <div className="col d-flex align-items-center ">
              <span className="right mx-2">
                <h1 className="service_no">02.</h1>
              </span>
              <span className="left ">
                <span className="top">
                  <img src={Icon2} />
                </span>
                <span className="bottom">
                  <h5>Reverse Osmosis (RO) </h5>
                </span>
              </span>
            </div>{" "}
            <div className="col d-flex align-items-center">
              <span className="right mx-2">
                <h1 className="service_no">03.</h1>
              </span>
              <span className="left ">
                <span className="top">
                  <img src={Icon3} />
                </span>
                <span className="bottom">
                  <h5>AMC (Service))</h5>
                </span>
              </span>
            </div>
          </div>

          <div className="row gaps-crds flex-nowrap my-2 ">
            <div className="col d-flex align-items-center ">
              <span className="right mx-2">
                <h1 className="service_no">04.</h1>
              </span>
              <span className="left ">
                <span className="top">
                  <img src={Icon4} />
                </span>
                <span className="bottom">
                  <h5>Installation</h5>
                </span>
              </span>
            </div>{" "}
            <div className="col d-flex align-items-center ">
              <span className="right mx-2">
                <h1 className="service_no">05.</h1>
              </span>
              <span className="left ">
                <span className="top">
                  <img src={Icon5} />
                </span>
                <span className="bottom">
                  <h5>Uninstallation</h5>
                </span>
              </span>
            </div>{" "}
            <div className="col d-flex align-items-center ">
              <span className="right mx-2">
                <h1 className="service_no">06.</h1>
              </span>
              <span className="left ">
                <span className="top">
                  <img src={Icon6} />
                </span>
                <span className="bottom">
                  <h5>Ultrafiltration (UF)</h5>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex  justify-content-center ">
          <button className="btn px-4 px-xs-4 btn-primary rounded-pill fw-semibold">
            <FontAwesomeIcon icon={faPhone} />
            <a className="btncall" href="tel:5551234567" target="_blank">
              <span> Call Us</span>
            </a>
          </button>
          <button className="btn px-3 btn-success rounded-pill mx-4 fw-semibold">
            <FontAwesomeIcon icon={faWhatsapp} />
            <a
              href="  https://wa.me/
                              
                           "
              className="btnwhats"
              target="_blank"
            >
              {" "}
              <span> Whatsapp</span>
            </a>
          </button>
        </div>
        <div>
          <Ratings />
        </div>
      </div>
    </>
  );
};
export default TypesOfService;
