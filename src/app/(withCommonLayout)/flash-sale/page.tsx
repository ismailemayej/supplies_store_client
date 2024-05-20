"use server";
import React from "react";
import FlashSaleComponet from "@/components/ui/FlashSaleComponet";
const AllFlshsale = async () => {
  const response = await fetch(
    "https://supplies-store-server.vercel.app/api/v1/products"
  );
  const data = await response.json();
  const DataFilter = data?.data?.filter((item: any) => item.discount);
  return <FlashSaleComponet DataFilter={DataFilter} />;
};
export default AllFlshsale;
