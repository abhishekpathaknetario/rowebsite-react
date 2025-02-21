import React from "react";
import "./WhatWeOffercss.css";
import Frame1 from "../assets/Images/frame1.png";
import Frame2 from "../assets/Images/frame2.png";
import Frame3 from "../assets/Images/frame3.png";
function WhatWeOffer() {
  return (
    <section className="container  mb-5">
      <div>
        {/* TOP HEADING AND DESCRIPTION */}
        <div className="text-center d-flex flex-column align-items-center  ">
          <p className="text-primary fw-bold fs-2 fw-semibold  py-2 ">WHAT WE OFFER</p>

          <h1 className="fs-2 fs-md-6 py-2 before-element">
            Top-Quality Water Purifier Services{" "}
          </h1>
          <p className="fs-6 fw-medium  w-100 w-md-75 my-3">
            From installation and maintenance to repairs we ensure your water is
            always pure and safe. Experience crystal clear water every day with
            our reliable and affordable services. Your health and satisfaction
            are our top priorities.
          </p>
        </div>

        {/* CARDS */}

        <div className="cards-container d-flex flex-wrap flex-md-nowrap gap-5 justify-content-center justify-content-around mt-5 px-4 ">
          {/*  */}
          <div className="card serv-cards  border-2" style={{ width: "20rem" }}>
            <div className="card-body">
              <span>
                <img src={Frame1} alt="" />
              </span>
              <h6 className="card-subtitle my-3 text-dark fw-bold ">
                1. Home Services{" "}
              </h6>
              <p className="text-dark card-paragraph  fw-normal ">
                Ensure clean, safe water with our expert water purifier
                services. We provide installation, maintenance, and repairs to
                keep your system running smoothly. Trust us to handle all your
                water purifier needs with care and professionally.
              </p>

              <btn

                className="readmore text-decoration-none  fw-semibold"
              >
                Read more
              </btn>
            </div>
          </div>
          <div className="card serv-cards border-2" style={{ width: "20rem" }}>
            <div className="card-body">
              <span>
                <img src={Frame2} alt="" />
              </span>
              <h6 className="card-subtitle my-3 text-dark fw-bold">
                2. Installation and Uninstallation
              </h6>
              <p className="  text-dark card-paragraph   fw-normal ">
                Our water purifier installation/uninstallation services offer
                quick and reliable setup or remove your system. Skilled
                technicians ensure perfect functioning, providing clean and safe
                water without hassle. Trust us for a professional and expert
                experience.
              </p>
              <btn

                className="readmore text-decoration-none  fw-semibold"
              >
                Read more
              </btn>
            </div>
          </div>
          <div className="card serv-cards border-2" style={{ width: "20rem" }}>
            <div className="card-body">
              <span>
                <img src={Frame3} alt="" />
              </span>
              <h6 className="card-subtitle my-3 text-dark fw-bold">
                3. Spare Parts Replacement
              </h6>
              <p className=" text-dark card-paragraph   fw-normal ">
                Our water purifier spare parts service offers high-quality
                replacement parts to keep your system running smoothly. Choose
                from a broad range of certified parts and let our expert
                technicians ensure your purifier stays efficient and effective.
                Enjoy clean, safe water with our loyal and professional support.
              </p>
              <btn

                className="readmore text-decoration-none  fw-semibold"
              >
                Read more
              </btn>
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </section>
  );
}

export default WhatWeOffer;
