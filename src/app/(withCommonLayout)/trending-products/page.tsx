import { getProducts } from "@/app/Api/GetData";
import TrendingAllProducts from "@/components/ui/Home/TrendingProducts/TrendingAllProducts";
import React from "react";

const AllTrendingProducts = async () => {
  const data = await getProducts();

  return <TrendingAllProducts data={data} />;
};

export default AllTrendingProducts;
