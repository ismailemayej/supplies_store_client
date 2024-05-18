export const getProductsByCategory = async (category: any) => {
  const response = await fetch(
    `http://localhost:5000/api/v1?category=${category}`
  );
  const data = response.json();
  return data;
};
