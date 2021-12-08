import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addProduct } from "../redux/cartSlice";
import {
  ProductBtnContainer,
  ProductPriceTag,
  ProductSalePrice,
  ProductTeaserCardText,
  ProductTeaserImg,
} from "../styles/ProductTeaserStyles";
import {
  Card,
  CardBuy,
  CardCategoryTag,
  CardDesc,
  CardFeatured,
  CardHeading,
  CardHeadingContainer,
  CardLink,
  CardPriceTag,
} from "../styles/ShowcaseStyles";

const ProductTeaser = ({ item }) => {
  const dispatch = useDispatch();

  // adds item to cart
  const handleAddToCart = () => {
    dispatch(addProduct({ ...item, quantity: 1 }));
  };

  return (
    <Card>
      <ProductTeaserImg src={item.image} />
      <CardHeadingContainer>
        <CardHeading>{item.name}</CardHeading>
      </CardHeadingContainer>
      <CardDesc>
        <div>
          <ProductTeaserCardText>
            <CardCategoryTag>Category</CardCategoryTag>: {item.category}
          </ProductTeaserCardText>
          {item.sale ? (
            <ProductTeaserCardText>
              <ProductPriceTag> ${item.price}</ProductPriceTag>
              <ProductSalePrice>${item.sale}</ProductSalePrice>
            </ProductTeaserCardText>
          ) : (
            <ProductTeaserCardText>
              <CardPriceTag> ${item.price}</CardPriceTag>
            </ProductTeaserCardText>
          )}
        </div>
        <ProductBtnContainer>
          <CardBuy onClick={() => handleAddToCart()} to="/allProducts">
            Buy
          </CardBuy>
          <CardLink to={`/product/${item._id}`}>View</CardLink>
        </ProductBtnContainer>
        {item.sale ? <CardFeatured>Sale</CardFeatured> : null}
      </CardDesc>
    </Card>
  );
};

export default ProductTeaser;
