import React, { useState } from "react";
import Contact from "../assets/Images/ContactUS.png";


const ContactUs = () => {
  const [user, addUser] = useState({
    name: "",
    phone: "",
    mail: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    addUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing data from local storage, if available
    const existingData = JSON.parse(localStorage.getItem("user")) || [];

    // Ensure existingData is an array (in case it's the first entry)
    const updatedData = Array.isArray(existingData)
      ? existingData
      : [existingData];

    // Append the new form data to the array
    updatedData.push(user);

    // Save the updated array back to local storage
    localStorage.setItem("user", JSON.stringify(updatedData));
    
    addUser({
      name: "",
      phone: "",
      mail: "",
    });
    alert("Form data has been saved to local storage!");
  };
  return (
    <>
      <div className="container  ">
        <div className="py-5">
          <p className="fs-3 fw-semibold text-center my-3 fw-bold  text-primary ">
            Get in Touch with Us{" "}
          </p>
          <p className="px-0 px-md-4 mb-5 justify fs-5">
            Do you need help? Get in touch with our staff right now, and we'll
            take care of your issues right away. Our services range from fast RO
            purifier installation to troubleshooting, ensuring your water
            purifier works perfectly.
          </p>

          <div>
            <div className="">
              <div className="row">
                <div className="col-12 col-md-6  d-flex align-items-center justify-content-center ">
                  <div className="contact-card-container">
                    <div
                      className="customBg  rounded-5 "
                      style={{
                        width: "100%",
                        height: "100%",
                        boxShadow:
                          " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                      }}
                    >
                      <p className="text-center w-100 text-bg-primary py-2 rounded-bottom-5 m-0 fw-semibold">
                        Contact us- (91-8802876865){" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-12 col-md-6  d-flex align-items-center justify-content-center
              "
                >
                  <form
                    className=" contact-card-container rounded-5 px-lg-5 px-3 py-3 my-5 "
                    style={{
                      boxShadow:
                        " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                    }}
                    id="contact-form"
                    onSubmit={handleSubmit}
                  >
                    <div className="p-4">
                      <div>
                        <p className="fw-semibold">
                          Please fill your contact details.{" "}
                        </p>

                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control p-2 px-3"
                          autoComplete="off"
                          placeholder="Your Name"
                          value={user.name}
                          onChange={handleInputs}
                        ></input>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="form-control p-2 px-3"
                          id="phome"
                          name="phone"
                          placeholder="Contact Number"
                          autoComplete="off"
                          value={user.phone}
                          onChange={handleInputs}
                        ></input>
                      </div>
                      <div>
                        <input
                          type="mail"
                          className="form-control p-2 px-3  "
                          name="mail"
                          id="mail"
                          autoComplete="off"
                          placeholder="Your Email"
                          value={user.mail}
                          onChange={handleInputs}
                        ></input>
                      </div>
                      <button
                        type="submit"
                        className="btn w-100 btn-primary fw-semibold"
                      >
                        Submit
                      </button>
                    </div>
                  </form>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
