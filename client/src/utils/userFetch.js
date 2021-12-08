export const getProducts = async (cat) => {
  return await fetch(
    cat ? `/api/products/allProducts${cat}` : `/api/products/allProducts`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
