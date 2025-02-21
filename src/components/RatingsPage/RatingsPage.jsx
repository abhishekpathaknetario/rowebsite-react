import React, { useEffect, useState } from "react";
import RatingCards from "./RatingCards";

const RatingsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Retrieve data from local storage
    const storedData = localStorage.getItem("reviews");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  console.log(data);
  return (
    <div>
      <div className="container py-5 ">
        <div className="py-5 d-flex flex-wrap">
          {data.length > 0 ? (
            data.map((item) => <RatingCards key={item.id} {...item} />)
          ) : (
            <div className="w-100 bg-primary p-5 rounded-4 text-white text-center">
              <h1 className="fw-bold">
                “ Your feedback is important to us. Be the first to leave a
                review 😎 ! ”
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RatingsPage;
