import React, { useState } from "react";

const products = [
  { sno: 1, name: "Carbon Filter", price: "₹450" },
  { sno: 2, name: "Sediment Filter	", price: "₹450" },
  { sno: 3, name: "Membrane", price: "₹1250/ 1650" },
  { sno: 4, name: "Spun Filter", price: "₹150/ 250" },
  { sno: 5, name: "Adapter", price: "₹750" },
  { sno: 6, name: "Solenoid Valve (SV)", price: "₹450" },
  { sno: 7, name: "RO Pumps", price: "₹1650/1850" },
  { sno: 8, name: "Flow Resitor (FR)", price: "₹100" },
  { sno: 9, name: "Tape", price: "₹100" },
  { sno: 10, name: "UA Lamp", price: "₹350" },
  { sno: 11, name: "UV Adapter", price: "₹350" },
  { sno: 12, name: "Carbon, Sediment and Spun Filters", price: "₹1050" },
  {
    sno: 13,
    name: "Carbon, Sediment, Membrane and Spun Filters",
    price: "₹2250",
  },
];

function ProductPrice() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a product"
        value={searchTerm}
        className="w-100 px-2 py-2"
        onChange={handleInputChange}
      />
      <div id="productList">
        {filteredProducts.map((product, index) => (
          <div key={index}>
            <p
              style={{ fontSize: ".8rem" }}
              className="d-flex  fw-semibold justify-content-between"
            >
              <span className="w-75">{product.name}:</span>
              <span className="text-primary w-25">{product.price}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPrice;
