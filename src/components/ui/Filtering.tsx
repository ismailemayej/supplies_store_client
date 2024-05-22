"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
const Filtaring = ({ products }: any, index: any) => {
  const [priceFilter, setPriceFilter] = useState(null);
  const [ratingsFilter, setratingsFilter] = useState(null);

  const handlePriceChange = (e: any) => {
    setPriceFilter(e.target.value);
  };

  const handleratingsChange = (e: any) => {
    setratingsFilter(e.target.value);
  };

  const filteredProducts = products.filter((product: any) => {
    return (
      (!priceFilter || product.price <= priceFilter) &&
      (!ratingsFilter || product.ratings >= ratingsFilter)
    );
  });

  return (
    <div key={index}>
      <div className="filters">
        <label>
          Max Price:
          <input
            type="number"
            value={priceFilter || ""}
            onChange={handlePriceChange}
          />
        </label>
        <label>
          Min ratings:
          <input
            type="number"
            value={ratingsFilter || ""}
            onChange={handleratingsChange}
          />
        </label>
      </div>
      <div className="product-grid">
        {filteredProducts.map((product: any) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Filtaring;
