import styles from "./styles.module.css";

import Form from "./Form/Form";
import Ratings from "./Ratings/Ratings";

import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { useEffect } from "react";

function RateUs() {
  // TO GATE TODAY DATE
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const today = new Date();
  const todayDate = `${today.getDate()} / ${today.getMonth() + 1
    } / ${today.getFullYear()}`;

  return (
    <div className="container py-5 ">
      <div
        className="py-5"
        style={{
          position: "relative",
          boxShadow:
            "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.29) 0px 1px 2px;",
        }}
      >
        <h2 className={styles.header}>Product Review</h2>
        <div className={styles.formContainer}>
          {/* RATINGS */}
          <Ratings />
          {/*FORM  */}
          <Form />
        </div>
        <div className={styles.recentReview}>
          <div className="px-3 md:px-5  text-center  py-3 d-flex  bg-white  gap-1 flex-column">
            <span
              style={{ color: "#f39309" }}
              className="stars d-flex align-items-center"
            >
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStarOutline />
              <span className="ms-2 text-black">4.0</span>
            </span>
            <span className="fw-bold">Laddu</span>
            <span style={{ color: "#979497" }} className="fw-semibold">
              {todayDate}
            </span>
            <span className={styles.buyerType}>Cretified Buyer</span>
          </div>
          <div
            style={{ background: "#f9f9f9" }}
            className="px-3 md:px-4  py-3 flex-grow-1"
          >
            <h4 className=" fw-bold">NICE QUALITY</h4>
            <p>Comfortable</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RateUs;
