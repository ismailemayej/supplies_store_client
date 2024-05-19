import { Image } from "antd";
import React from "react";

const TrendingProductCard = () => {
  return (
    <div className="card card-compact lg:w-full lg:h-full lg:bg-base-100 shadow-xl m-2 border">
      <figure>
        <Image
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-actions justify-end lg:mt-10">
        <button className=" bg-primary-200 rounded-b-xl py-2 w-full">
          Name
        </button>
      </div>
    </div>
  );
};

export default TrendingProductCard;
