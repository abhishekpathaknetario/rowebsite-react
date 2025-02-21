import React from "react";
import Error from "../assets/Images/error.png";
const ErrorPage = () => {
  return (
    <>
      {" "}
      <div className="d-flex flex-column bg-white justify-content-center align-items-center vh-100">
        <img src={Error} alt="" srcset="" className="img-fluid" />
        <h1 className="fst-italic w-100 w-md-25 fs-2 text-success text-center">
          Sorry. page is not found. Please go back and save water.
        </h1>
      </div>
    </>
  );
};

export default ErrorPage;
