import React, { Helmet, useEffect } from "react";
// import "./SmilingMechanic.css";
import SmileMechanic from "../../assets/Images/services/plumber.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import "./Services.css";
import TypesOfService from "./TypesOfService";
const Services = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-5">
      <section className="px-3 py-5 my-5 my-lg-0 px-lg-5 pe-3 pe-lg-0">
        <div className="d-flex justify-content-between flex-wrap-reverse flex-lg-nowrap gap-4 gap-lg-5">
          <div className="service_info container  col-lg-6 d-flex  align-items-start justify-content-center flex-column">
            <h1 className="service-heading ">
              Top-Notch <span className="text-primary fw-bold">Water </span>
              Purifier Services Across India with Reliable Quality
            </h1>{" "}
            <p className="service-desc">
              The Best RO Repair Service Provider ensures expert water purifier
              services across India, specializing in maintenance, repairs, and
              spare parts for all brands. This guarantees safe drinking water
              and reliable performance with quick, professional support
              nationwide.
            </p>
            <button className="btn px-4 btn-primary rounded-pill fw-bold">
              <FontAwesomeIcon icon={faPhone} />
              <a className="btncall" href="tel:+918006225800" target="_blank">
                <span> Call Us</span>
              </a>
            </button>
          </div>

          <div className="">
            <img src={SmileMechanic} className="img-fluid rounded-3" alt="" />
          </div>
        </div>
      </section>

      <TypesOfService />
    </div>
  );
};

export default Services;
