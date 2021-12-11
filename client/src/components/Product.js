import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addProduct, updateQty } from "../redux/cartSlice";
import { getSingleProduct } from "../redux/thunk";
import {
  ProductPriceTag,
  ProductSalePrice,
} from "../styles/ProductTeaserStyles";
import {
  Image,
  ImageContainer,
  ProductDesc,
  ProductBtnContainer,
  ProductHeading,
  ProductInfoContainer,
  ProductPrice,
  SingleProductContainer,
  ProductInfoInputWrapper,
  ProductInfoInputContainer,
  ProductInfoButtons,
  ProductInfoQty,
  ProductInfoButtonPlus,
  ProductInfoButtonMinus,
  ProductHeadingContainer,
  ProductSubHeading,
  ProductBuyBtn,
  ProductPriceCatWrapper,
} from "../styles/SingleProduct/SingleProductStyles";
import Loader from "./Loader";
import alertSlice from "../redux/alertSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { list } = useSelector((state) => state.singleProduct);
  const [qty, setQty] = useState(0);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch]);

  const handleAddToCart = () => {
    dispatch(addProduct({ ...list.msg, quantity: qty }));
    dispatch(updateQty({ ...list.msg, quantity: qty }));
    dispatch(
      alertSlice.actions.createAlert({
        message: `You're item has been added to the cart :)`,
        type: "success",
      })
    );
  };

  const handlePlusQty = () => {
    if (qty >= list.msg.inStock) {
      setQty(list.msg.inStock);
    } else {
      setQty(qty + 1);
    }
  };

  const handleMinusQty = () => {
    if (qty === 0) {
      setQty(0);
    } else {
      setQty(qty - 1);
    }
  };

  return (
    <>
      {list.msg === undefined ? (
        <Loader />
      ) : (
        <SingleProductContainer>
          <ImageContainer>
            <Image src={list.msg.image} />
          </ImageContainer>
          <ProductInfoContainer>
            <ProductHeadingContainer>
              <ProductHeading>{list.msg.name}</ProductHeading>
              <ProductSubHeading>
                {list.msg.description.slice(0, 30)}
              </ProductSubHeading>
            </ProductHeadingContainer>
            <ProductPriceCatWrapper>
              {list.msg.sale ? (
                <div>
                  <ProductPriceTag> ${list.msg.price}</ProductPriceTag>
                  <ProductSalePrice>${list.msg.sale}</ProductSalePrice>
                </div>
              ) : (
                <ProductPrice>Price: ${list.msg.price}</ProductPrice>
              )}
              <span>Category: {list.msg.category}</span>
            </ProductPriceCatWrapper>
            <ProductInfoInputWrapper>
              <ProductInfoInputContainer>
                <ProductInfoButtonPlus
                  disabled={qty >= list.msg.inStock}
                  onClick={() => handlePlusQty()}
                >
                  +
                </ProductInfoButtonPlus>
                <ProductInfoQty>{qty}</ProductInfoQty>
                <ProductInfoButtonMinus
                  disabled={qty === 0}
                  onClick={() => handleMinusQty()}
                >
                  -
                </ProductInfoButtonMinus>
              </ProductInfoInputContainer>
              <ProductBuyBtn onClick={() => handleAddToCart()}>
                Buy
              </ProductBuyBtn>
            </ProductInfoInputWrapper>
            <p>{list.msg.description}</p>
          </ProductInfoContainer>
        </SingleProductContainer>
      )}
    </>
  );
};

export default Product;
