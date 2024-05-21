import { getProducts } from "@/app/Api/GetData";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";

const AllCategory = async () => {
  const data = await getProducts();
  const filterdata = data.data?.filter((item: any) => item.category__name);
  // Using a Set to store unique category names
  const categorySet = new Set(
    filterdata.map((data: any) => data.category__name)
  );
  const Categories = Array.from(categorySet);
  return (
    <div>
      {Categories?.map((item: any, index: any) => (
        <Link key={index} href={`/categories/${item}`}>
          <Button className="p-16 m-2">{item}</Button>
        </Link>
      ))}
    </div>
  );
};

export default AllCategory;
