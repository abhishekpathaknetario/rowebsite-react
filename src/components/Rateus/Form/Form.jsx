import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import StarRating from "./StarRating/StarRating";
import "../SubmitBtn/submitBtn.css";

const Form = () => {
  // LOADER

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    // Simulate form submission delay
    setTimeout(() => {
      setIsLoading(false);
      alert("Form submitted successfully!");
      // Reset form to initial state
      setFormData(initialFormState);
    }, 1000); // Simulated 2-second delay
  };

  const today = new Date();
  const todayDate = `${today.getDate()} / ${
    today.getMonth() + 1
  } / ${today.getFullYear()}`;

  // FUNCTIONS TO ADD FORM DATA

  const initialFormState = {
    userName: "",
    userMail: "",
    ratings: "",
    reviewSummary: "",
    fullReview: "",
    date: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  // handle Input Changes

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // handle Input Changes

  const handleRatingChange = (rating) => {
    setFormData((prevData) => ({
      ...prevData,
      ratings: rating,
    }));
    setFormData((prevData) => ({
      ...prevData,
      date: todayDate,
    }));
  };

  // Handle Submit

  const handleSubmit = (e) => {
    e.preventDefault();
    //saving data to localstorage
    function saveFormData(formData) {
      const existingData = JSON.parse(localStorage.getItem("reviews")) || [];
      existingData.push(formData);

      //save data to local storage
      localStorage.setItem("reviews", JSON.stringify(existingData));
      console.log("updated data in localstorage", existingData);
    }
    handleClick();
    saveFormData(formData);

    //stored form data
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <span className="d-flex gap-1">
        <input
          type="text"
          placeholder="Your Name"
          id="username"
          name="userName"
          required
          onChange={handleInputChange}
          value={formData.userName}
        />

        <input
          type="email"
          placeholder="Your Mail"
          id="useremail"
          name="userMail"
          required
          value={formData.userMail}
          onChange={handleInputChange}
        />
      </span>

      <div className="d-flex flex-column justify-content-start">
        {/* STARS */}
        <p className="m-0">
          Rate Us <span className="text-danger fw-bold fs-5 ms-2 me-4">*</span>
        </p>

        <StarRating rate={formData.ratings} onRateChange={handleRatingChange} />
      </div>

      <input
        type="text"
        id="summary"
        name="reviewSummary"
        placeholder="Review summary (150 characters max)"
        required
        value={formData.reviewSummary}
        onChange={handleInputChange}
      />
      <textarea
        id="review"
        name="fullReview"
        maxLength="500"
        placeholder="Enter your review for this product. Maximum 500 characters are allowed (optional)"
        required
        value={formData.fullReview}
        onChange={handleInputChange}
      ></textarea>
      <button
        type="submit"
        // onClick={onClick}
        className="submit-button"
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="loader"></span>
        ) : (
          <span className="button-text">Submit</span>
        )}
      </button>
    </form>
  );
};

export default Form;
