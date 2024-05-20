"use server";
import React from "react";
import ProductCard from "./ProductCard";

const FlashSaleComponet = ({ DataFilter }: any) => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-3">
      {DataFilter?.map((product: any) => () => {
        <ProductCard
          key={product._id}
          id={product._id}
          title={product.title}
          price={product.price}
          img={product.images__001}
          discount={product.discount}
        />;
      })}
      Flash sale
    </div>
  );
};

export default FlashSaleComponet;
