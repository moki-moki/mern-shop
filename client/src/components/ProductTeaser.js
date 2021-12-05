import styled from "styled-components";
import {
  ProductBtnContainer,
  ProductPriceTag,
  ProductSalePrice,
  ProductTeaserCardText,
  ProductTeaserImg,
} from "../styles/ProductTeaserStyles";
import {
  Card,
  CardCategoryTag,
  CardDesc,
  CardFeatured,
  CardHeading,
  CardHeadingContainer,
  CardLink,
  CardPriceTag,
} from "../styles/ShowcaseStyles";

const ProductTeaser = ({ item }) => {
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
          <CardLink to="/allProducts">Buy</CardLink>
          <CardLink to="/allProducts">View</CardLink>
        </ProductBtnContainer>
        {item.sale ? <CardFeatured>Sale</CardFeatured> : null}
      </CardDesc>
    </Card>
  );
};

export default ProductTeaser;
