import React from "react";
import "./PopServ.css";
import Mechanic from "../assets/Images/mechanic.png";
import Courier from "../assets/Images/courier.png";
import Wrench from "../assets/Images/wrench.png";

function OurPopServ() {
  return (
    <div className="pb-5 pt-md-3   bg-service">
      <section className="container">
        <div>
          {/* TOP HEADING AND DESCRIPTION */}
          <div className="text-center d-flex flex-column align-items-center my-5 mt-0">
            <p className="text-primary fs-3 my-5 fw-bold ">
              OUR POPULAR SERVICES
            </p>

            <h1 className="fs-2 w-100 w-md-75">
              Your Go-To Services for Pure Water
            </h1>
            <p className="fs-6 fw-medium w-100 w-md-75 my-3">
              Find out why our services are the best option for water purifier
              care. We provide expert installation, full maintenance, swift
              repairs and reliable spare parts to keep your system running
              smoothly. Experience unmatched quality and support for all your
              water purification needs.
            </p>
          </div>

          <div className="cards justify-content-around gap-5 row">
            {/* CARD */}
            <div className="col-11 col-md-3  ">
              <div className="card serv-card">
                <img src={Mechanic} alt="" className="img-fluid" />
              </div>

              <p className="my-2">Repair Service ₹400</p>
              <b className="btn btn-primary rounded-pill w-100 fw-semibold">
                Book Now
              </b>
            </div>
            {/* CARD */}

            {/* CARD */}
            <div className=" col-11 col-md-3  ">
              <div className="card serv-card">
                <img src={Courier} alt="" className="img-fluid" />
              </div>

              <p className="my-2">Installation ₹600 </p>
              <b className="btn fw-semibold btn-primary rounded-pill w-100">
                Book Now
              </b>
            </div>
            {/* CARD */}

            {/* CARD */}
            <div className=" col-11 col-md-3   ">
              <div className="card serv-card">
                <img src={Wrench} alt="" className="img-fluid" />
              </div>

              <p className="my-2">Uninstallation</p>
              <b className="btn fw-semibold btn-primary rounded-pill w-100">
                Book Now
              </b>
            </div>
            {/* CARD */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurPopServ;
