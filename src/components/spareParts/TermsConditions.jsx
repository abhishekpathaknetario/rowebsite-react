import React from "react";

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

const TermsAndConditions = () => {
  return (
    <div className="lg-container px-0 px-lg-5 mt-5">
      <div className="lg-container">
        <div className="card-header  text-black">
          <h4 className="my-4 text-primary fw-bold fs-2">Terms & Conditions</h4>
        </div>
        <div className="card-body">
          <h3 className="fs-6">Service Warranty</h3>
          <p
            className="text-dark fw-semibold"
            style={{ fontSize: "1rem", textAlign: "justify" }}
          >
            Our RO purifier service includes a limited warranty period.
            Warranties for spare parts, including RO purifier spare parts and
            other components, are subject to the manufacturer's terms.
          </p>

          <h3 style={{ fontSize: "1.2rem" }}>Appointment scheduling </h3>

          <p
            className="text-dark fw-semibold"
            style={{ fontSize: "1rem", textAlign: "justify" }}
          >
            All RO purifier service appointments, including RO repair in Noida
            and RO service in Gurgaon, must be made in advance. Cancellations or
            rescheduling should be made at least 24 hours in advance.
          </p>

          <h3 style={{ fontSize: "1.2rem" }}>Payment Terms</h3>

          <p
            className="text-dark fw-semibold"
            style={{ fontSize: "1rem", textAlign: "justify" }}
          >
            Payment for services, such as RO purifier replacement parts provider
            solutions, is due at the time of service or delivery.
          </p>

          <h3 style={{ fontSize: "1.2rem" }}>Liability</h3>

          <p
            className="text-dark fw-semibold"
            style={{ fontSize: "1rem", textAlign: "justify" }}
          >
            We are not liable for any damages incurred as a result of poor
            handling or illegal purifier repairs during RO repair or cleaning
            services.
          </p>

          <h3 style={{ fontSize: "1.2rem" }}>Genuine parts. </h3>

          <p
            className="text-dark fw-semibold"
            style={{ fontSize: "1rem", textAlign: "justify" }}
          >
            We utilize original RO water purifier spare parts, but compatibility
            with non-standard or modified systems cannot be guaranteed.
          </p>

          <h3 style={{ fontSize: "1.2rem" }}>Service Areas </h3>

          <p
            className="text-dark fw-semibold"
            style={{ fontSize: "1rem", textAlign: "justify" }}
          >
            Our RO servicing and repairs are now only offered in Gurgaon and
            Noida.
          </p>

          <h3 style={{ fontSize: "1.2rem" }}>Customer's Responsibility </h3>

          <p
            className="text-dark fw-semibold"
            style={{ fontSize: "1rem", textAlign: "justify" }}
          >
            It is the duty of the customer to ensure that the purifier is
            accessible during water purifier servicing visits.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
