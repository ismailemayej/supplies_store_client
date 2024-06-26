"use client";
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

const TrendingProductCard = ({ img, title, price, id, discount }: any) => {
  return (
    <Card shadow="sm" key={id} className="lg:mx-2 mx-1 h-[18rem]">
      <CardBody className=" overflow-visible object-cover transition duration-500 group-hover:scale-105">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={title}
          className=" w-full object-cover h-[140px]"
          src={img}
        />
      </CardBody>
      <CardFooter className="lg:text-small text-[11px] justify-between">
        <b>{title}</b>
        <p className=" text-orange-500 text-xl ">${price}</p>
      </CardFooter>
      <CardFooter className="lg:text-small text-[11px] justify-between">
        <div className="flex gap-2 bottom-0 left-0 w-full">
          <Link
            href={`/product/${id}`}
            className="text-center text-current text-xl text-white w-full text-md px-3 py-2 hover:bg-teal-500 bg-purple-400 rounded-lg"
          >
            Buy Now
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TrendingProductCard;
