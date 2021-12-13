import { useDispatch, useSelector } from "react-redux";
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
import alertSlice from "../redux/alertSlice";
import Rating from "./Rating";

const ProductTeaser = ({ item }) => {
  const dispatch = useDispatch();

  // adds item to cart
  const handleAddToCart = () => {
    dispatch(addProduct({ ...item, quantity: 1 }));

    dispatch(
      alertSlice.actions.createAlert({
        message: `Item has been added to the cart :)`,
        type: "success",
      })
    );
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
          <div style={{ display: "flex" }}>
            <Rating value={item.rating} />
            rating: {item.rating}
          </div>
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
