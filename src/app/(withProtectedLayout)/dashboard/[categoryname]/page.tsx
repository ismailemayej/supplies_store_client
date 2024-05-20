import React from "react";

const CategoryDashboard = ({ searchParams }: any) => {
  console.log("serch params", searchParams.category);
  return <div>THis is categoy name is {searchParams.categoryname}</div>;
};

export default CategoryDashboard;
