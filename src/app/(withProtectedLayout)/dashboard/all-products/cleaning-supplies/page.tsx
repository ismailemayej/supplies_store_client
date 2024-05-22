import React from "react";
import AllProducts from "../AllProduct";
import { getProducts } from "@/app/Api/GetData";

const AllProductPage = async () => {
  const data = await getProducts();
  return (
    <div>
      <AllProducts data={data} />
    </div>
  );
};

export default AllProductPage;
