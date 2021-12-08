import {
  PreviewCardContainer,
  PreviewHeading,
  PrewviewContainer,
  ProductViewAllLink,
} from "../styles/ProductPreviewStyles";
import ProductTeaser from "./ProductTeaser";
import { Link } from "react-router-dom";
import { getProductPreview } from "../redux/thunk";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ProductPreview = () => {
  const dispatch = useDispatch();

  const { list } = useSelector((state) => state.previewProducts);

  useEffect(() => {
    dispatch(getProductPreview());
  }, [dispatch]);

  console.log(list);

  return (
    <PrewviewContainer>
      <PreviewHeading>Some of Our Products</PreviewHeading>
      <PreviewCardContainer>
        {list.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {list.products
              .map((item) => <ProductTeaser item={item} key={item._id} />)
              .slice(0, 5)}
          </>
        )}
        <ProductViewAllLink>
          <Link to="/allProducts">View All Products</Link>
        </ProductViewAllLink>
      </PreviewCardContainer>
    </PrewviewContainer>
  );
};

export default ProductPreview;
