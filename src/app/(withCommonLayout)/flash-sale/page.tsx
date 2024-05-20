import React from "react";
import FlashSaleComponet from "@/components/ui/FlashSaleComponet";
import { getProducts } from "@/app/Api/GetData";
const AllFlshsale = async () => {
  const data = await getProducts();
  return <FlashSaleComponet data={data} />;
};
export default AllFlshsale;
