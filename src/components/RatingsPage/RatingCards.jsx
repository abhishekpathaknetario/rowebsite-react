import React from "react";
import { IoIosStar } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
const RatingCards = ({
  fullReview,
  ratings,
  reviewSummary,
  userMail,
  userName,
  date,
}) => {
  return (
    <>
      {/* RATING CARDS */}
      <div
        className="p-4 d-flex align-items-center flex-column"
        style={{ background: "#f4f7fa", minWidth: "350px", maxWidth: "350px" }}
      >
        <div className="header  w-100 gap-3   d-flex">
          {/* PROFILE IMAGE */}
          <span style={{ width: "60px" }}>
            <img
              src="https://giffiles.alphacoders.com/398/3987.gif"
              alt=""
              style={{ width: "100%" }}
            />
          </span>
          <span className="d-flex flex-column justify-content-center align-items-start">
            <p className="m-0 fw-bold">{userName}</p>
            <span className="d-flex  align-items-center">
              <p className="m-0" style={{ fontSize: "13px" }}>
                @{userName.replaceAll(" ", "").toLowerCase()}
              </p>
              <GoDotFill />
              <p className="m-0" style={{ fontSize: "13px" }}>
                {date}
              </p>{" "}
            </span>
          </span>
        </div>
        <span
          style={{ color: "#f39309", fontSize: "25px", marginBottom: "10px" }}
        >
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />

          {ratings}
        </span>

        <small>{reviewSummary}</small>

        <p style={{ textAlign: "justify" }} className=" fw-semibold py-1 ">
          {fullReview}
        </p>
      </div>
    </>
  );
};

export default RatingCards;
