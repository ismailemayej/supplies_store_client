"use client";
import { Button } from "@nextui-org/button";
import React from "react";

const CategoryCard = ({ title, img, price, id, category }: any) => {
  return (
    <tbody className="text-black">
      <tr
        key={id}
        className=" bg-white hover:translate-x-2 hover:bg-slate-200 delay-100  px-4 border-b0 hover:rounded-xl "
      >
        <td className="p-4">
          <img
            src={img}
            className="w-16 md:w-32 max-w-full rounded-xl border max-h-full"
            alt={title}
          />
        </td>
        <td className="px-6 py-4 font-semibold">{title}</td>
        <td className="px-6 py-4">
          <div className="flex items-center">{category}</div>
        </td>
        <td className="px-6 py-4 font-semibold">${price}</td>
        <td className="px-6 py-4">
          <div
            className="inline-flex mr-2 rounded-md shadow-sm text-white"
            role="group"
          >
            <Button className="text-white" color="success">
              Manage
            </Button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default CategoryCard;
