import {
  PreviewCardContainer,
  PreviewHeading,
  PrewviewContainer,
  ProductViewAllLink,
} from "../styles/ProductPreviewStyles";
import ProductTeaser from "./ProductTeaser";
import { Link } from "react-router-dom";

const ProductPreview = ({ list }) => {
  return (
    <PrewviewContainer>
      <PreviewHeading>Some of Our Products</PreviewHeading>
      <PreviewCardContainer>
        {list
          .map((item) => <ProductTeaser item={item} key={item._id} />)
          .slice(0, 5)}
        <ProductViewAllLink>
          <Link to="/allProducts">View All Products</Link>
        </ProductViewAllLink>
      </PreviewCardContainer>
    </PrewviewContainer>
  );
};

export default ProductPreview;
