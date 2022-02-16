import { useDispatch } from "react-redux";
import { addProduct } from "../redux/slice/cartSlice";
import {
  ProductBtnContainer,
  ProductFavIconContainer,
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
import alertSlice from "../redux/slice/alertSlice";
import Rating from "./Rating";
import { AiOutlineHeart } from "react-icons/ai";
import { addItem } from "../redux/slice/whishListSlice";
import { ImGift } from "react-icons/im";

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

  const handleAddToWishList = () => {
    dispatch(addItem({ ...item, quantity: 1 }));

    dispatch(
      alertSlice.actions.createAlert({
        message: `Item was added to your wish list :)`,
        type: "success",
      })
    );
  };

  return (
    <Card>
      <ProductTeaserImg
        src={
          !item.image.includes("images.unsplash")
            ? `http://localhost:5000/images/${item.image}`
            : item.image
        }
      />
      <ProductFavIconContainer onClick={() => handleAddToWishList()}>
        <AiOutlineHeart />
      </ProductFavIconContainer>
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
