import React from "react";
import "./SmilingMechanic.css";
import SmileMechanic from "../assets/Images/smilingMechanic.png";

const SmilingMechanic = () => {
  return (
    <div>
      <section className="py-3 pt-0  my-md-5 mt-0 px-3 px-lg-5">
        <div className="d-flex justify-content-between align-items-center flex-wrap flex-lg-nowrap gap-lg-5">
          <div className="   col-lg-6">
            <p className="text-primary fw-bold fs-5 fs-md-4 mt-5">SERVICE</p>
            <p className="fs-5">
              <b className="fs-4">100+</b> Service Mens
            </p>
            <p className="fs-6 fw-semibold fs-lg-5 ">
              Ensure your family's health and safety with our complete water
              purifier services. We offer a full range of services designed to
              keep your water purifier functioning optimally and your drinking
              water free from contaminants. What we provide is as a result:
            </p>
            <p className="btn px-4 py-2 btn-primary fw-semibold rounded-pill">
              Read More
            </p>
          </div>

          <div className="">
            <img src={SmileMechanic} className="img-fluid" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmilingMechanic;
