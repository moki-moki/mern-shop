import { useDispatch } from "react-redux";
import { removeItem } from "../redux/slice/whishListSlice";
import { addProduct } from "../redux/slice/cartSlice";
import { MdDeleteOutline } from "react-icons/md";
import {
  Card,
  CardBuy,
  CardCategoryTag,
  CardDesc,
  CardFeatured,
  CardHeading,
  CardHeadingContainer,
  CardPriceTag,
} from "../styles/ShowcaseStyles";
import {
  ProductBtnContainer,
  ProductFavIconContainer,
  ProductPriceTag,
  ProductSalePrice,
  ProductTeaserCardText,
  ProductTeaserImg,
} from "../styles/ProductTeaserStyles";
import Rating from "./Rating";
import alertSlice from "../redux/slice/alertSlice";

const WishListProducts = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    // dispatch(removeItem(id));
    dispatch(removeItem(id));
    console.log(id);
  };

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
      <ProductFavIconContainer onClick={() => handleRemove(item._id)}>
        <MdDeleteOutline />
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
        </ProductBtnContainer>
        {item.sale ? <CardFeatured>Sale</CardFeatured> : null}
      </CardDesc>
    </Card>
  );
};

export default WishListProducts;
