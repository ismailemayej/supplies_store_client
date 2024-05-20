"use client";
import React from "react";
import FlashSaleCard from "./FlashSaleCard";
import SectionCard from "./SectionCard";

const FlashSaleComponet = ({ data }: any) => {
  const DataFilter = data?.data?.filter((item: any) => item.discount);
  return (
    <>
      <SectionCard Ltitle="Flash Sale" Rtitle="Limited Time Offer" />
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-3">
        {DataFilter.map((product: any) => (
          <FlashSaleCard
            key={product._id}
            id={product._id}
            title={product.title}
            price={product.price}
            img={product.images__001}
            discount={product.discount}
            // ratings={product.rating}
            // review={product.review}
            // category={product.category}
            // description={product.description}
            // count={product.count}
            // seller={product.seller}
          />
        ))}
      </div>
    </>
  );
};

export default FlashSaleComponet;
