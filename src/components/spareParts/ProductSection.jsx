import React, { useState } from "react";
import "./product.css";

import product1 from "../spareParts/CardsImage/CarbonFilter.png";

import product2 from "../spareParts/CardsImage/SedimentFilter.png";

import product3 from "../spareParts/CardsImage/waterpurifiermembrane.png";

import product4 from "../spareParts/CardsImage/SpunFilter.png";

import product5 from "../spareParts/CardsImage/charger.png";

import product6 from "../spareParts/CardsImage/SolenoidValve.png";

import product7 from "../spareParts/CardsImage/waterROPumps.png";

import product8 from "../spareParts/CardsImage/FlowResistor.png";

import product9 from "../spareParts/CardsImage/wiretape.png";

import product10 from "../spareParts/CardsImage/UALamp.png";

import product11 from "../spareParts/CardsImage/UV.png";

import product12 from "../spareParts/CardsImage/CarbonSedimentSpunFilters.png";

import product13 from "../spareParts/CardsImage/CarbonSedimentSpunFilters.png";


const products = [
  { id: 1, image: product1, title: "Carbon Filter", price: "₹450" },
  { id: 2, image: product2, title: "Sediment Filter", price: "₹450" },
  { id: 3, image: product3, title: "Membrane", price: "₹1250/1650" },
  { id: 4, image: product4, title: "Spun Filter", price: "₹150/250" },
  { id: 5, image: product5, title: "Adapter", price: "₹750" },
  {
    id: 6,
    image: product6,
    title: "Solenoid Valve(SV)",
    price: "₹450",
  },
  {
    id: 7,
    image: product7,
    title: "RO pumps",
    price: "₹1650/1850",
  },
  {
    id: 8,
    image: product8,
    title: "Flow Resitor (FR)",
    price: "₹100",
  },
  {
    id: 9,
    image: product9,
    title: "Tape",
    price: "₹100",
  },
  {
    id: 10,
    image: product10,
    title: "UV Lamp",
    price: "₹350",
  },
  {
    id: 11,
    image: product11,
    title: "UV Adapter",
    price: "₹350",
  },
  {
    id: 12,
    image: product12,
    title: "Carbon, Sediment and Spun Filters",
    price: "₹1050",
  },
  {
    id: 13,
    image: product13,
    title: "Carbon, Sediment, Membrane, Spun Filters",
    price: "₹2250",
  },
];

const ProductCard = ({ product }) => (
  <div
    className="card"
    style={{
      width: "90%",
      padding: "10px 0px",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      fontSize: "10px",
    }}
  >
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ width: "100%", height: "220px" }}
    >
      <img
        src={product.image}
        className="card-img-top "
        alt={product.name}
        style={{ height: "80%", width: "80%", objectFit: "contain" }}
      />
    </div>

    <div className="card-body">
      <span>
        <p className="fw-semibold item-paragraph card-title">{product.title}</p>
      </span>
      <span>
        <p className="card-text my-2">
          Price: <span className="text-primary"> {product.price}</span>
        </p>
      </span>
      <span>
        <button className="btn btn-primary addcart w-100 fw-semibold">
          Add to Cart
        </button>
      </span>
    </div>
  </div>
);

const ProductSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        className="w-100 px-2 py-2 rounded-2 fw-semibold text-dark"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div
        className="w-100 w-md-50 w-lg-25  overflow-y-scroll my-5"
        style={{ height: "70vh" }}
      >
        <div className="product-list row  d-flex justify-content-center  row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {filteredProducts.map((product) => (
            <div
              className="col  d-flex justify-content-center"
              key={product.id}
            >
              <ProductCard product={product} />{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
