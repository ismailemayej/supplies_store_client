import { Image } from "antd";
import React from "react";

const ProductDetails = ({ productInfo }: any) => {
  return (
    <>
      <div className="font-sans bg-white">
        <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
            <div className="lg:col-span-3 w-full lg:sticky top-0 text-center flex">
              <div className="mt-6 gap-6 mx-auto w-[25%]">
                <br />
                <div className="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                  <Image
                    src={productInfo.images__001}
                    alt="Product2"
                    className="w-24 cursor-pointer"
                  />
                </div>
                <br />
                <div className="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                  <Image
                    src={productInfo.images__002}
                    alt="Product2"
                    className="w-24 cursor-pointer"
                  />
                </div>
                <br />
                <div className="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                  <Image
                    src={productInfo.images__003}
                    alt="Product2"
                    className="w-24 cursor-pointer"
                  />
                </div>
              </div>
              <div className=" w-[75%] px-4 py-10 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                <Image
                  src={productInfo.images__001}
                  alt="Product"
                  className="w-4/5 rounded object-cover"
                />
                <button type="button" className="absolute top-4 right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    fill="#ccc"
                    className="mr-1 hover:fill-[#333]"
                    viewBox="0 0 64 64"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            {/* product title */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-[#333]">
                {productInfo.title}
              </h2>
              {/* product price */}
              <div className="flex flex-wrap gap-4 mt-4">
                <p className="text-[#333] text-3xl font-bold">
                  ${productInfo.price}
                </p>
                <p className="text-gray-400 text-xl line-through">
                  {productInfo.price + 5.3}
                  <span className="text-sm ml-1">Tax included</span>
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                <p className="text-[#333] text-xl font-bold">
                  Ratings:{" "}
                  <span className="text-red-500">{productInfo.ratings}</span>
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                <p className="text-[#333] text-xl font-bold">
                  Category:{" "}
                  <span className="text-red-500">
                    {productInfo.category__name}
                  </span>
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                <p className="text-[#333] text-lg font-semibold">
                  Description:
                  <span className="text-red-500">
                    {productInfo.description}
                  </span>
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                <button
                  type="button"
                  className="min-w-[200px] px-4 py-3 bg-[#333] hover:bg-[#111] text-white text-sm font-semibold rounded"
                >
                  Buy now
                </button>
                <button
                  type="button"
                  className="min-w-[200px] px-4 py-2.5 border border-[#333] bg-transparent hover:bg-gray-50 text-[#333] text-sm font-semibold rounded"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
