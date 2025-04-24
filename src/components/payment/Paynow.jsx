import React, { useEffect } from "react";

import UpiBrands from "../../assets/Images/upibrands.png";
import QrCode from "../../assets/Images/qr.jpg";

const Paynow = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="my-5 py-5">
      <div className="container my-5">
        <h1 className="text-primary fw-bold">Pay now</h1>
        <p>More Information and Any Problem Call Contact Dinesh Kumar</p>
      </div>
      <div
        className="container
      d-flex flex-column align-items-center"
      >
        <p className="fw-bold fs-4">Scan QR</p>
        <img src={QrCode} className="img-fluid w-25 my-3 " alt="" />

        <img src={UpiBrands} className="img-fluid px-3" alt="" />
      </div>
    </div>
  );
};
export default Paynow;
