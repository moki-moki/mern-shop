import {
  PreviewCardContainer,
  PreviewHeading,
  PrewviewContainer,
  ProductViewAllLink,
} from "../styles/ProductPreviewStyles";
import dummyData from "../data/dummyData.json";
import ProductTeaser from "./ProductTeaser";
import { Link } from "react-router-dom";

const ProductPreview = () => {
  return (
    <PrewviewContainer>
      <PreviewHeading>Some of Our Products</PreviewHeading>
      <PreviewCardContainer>
        {dummyData.map((item, idx) => (
          <ProductTeaser item={item} key={idx} />
        ))}
        <ProductViewAllLink>
          <Link to="/allProducts">View All Products</Link>
        </ProductViewAllLink>
      </PreviewCardContainer>
    </PrewviewContainer>
  );
};

export default ProductPreview;
