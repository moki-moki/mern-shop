import {
  CardImage,
  CardInfoContainer,
  CardInfoWrapper,
  CardItemWrapper,
  CardPriceTag,
  CardPriceTagWrapper,
  CardQtyContainer,
  CardSaleInnerWrapper,
  CardSaleTag,
  CardSaleWrapper,
  CardSelect,
} from "../styles/CartStyles/CartStyle";

import { useDispatch } from "react-redux";

import { updateQty, removeItem } from "../redux/slice/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleUpdateQty = (item, qty) => {
    dispatch(updateQty({ ...item, quantity: qty }));
  };

  return (
    <CardItemWrapper>
      <CardImage src={item.image} />
      <CardInfoContainer>
        <CardInfoWrapper>
          <h2>{item.name}</h2>
          <span> category: {item.category} </span>
        </CardInfoWrapper>
        <CardInfoWrapper>
          {item.sale ? (
            <CardSaleWrapper>
              <CardSaleInnerWrapper>
                <h3>Price:</h3>
                <CardPriceTagWrapper>
                  <CardPriceTag> ${item.price}</CardPriceTag>
                  <CardSaleTag>${item.sale}</CardSaleTag>
                </CardPriceTagWrapper>
              </CardSaleInnerWrapper>
            </CardSaleWrapper>
          ) : (
            <span>
              Price:
              {item.price}
            </span>
          )}

          <CardQtyContainer>
            Qty:
            <CardSelect
              defaultValue={0}
              onChange={(e) => handleUpdateQty(item, e.target.value)}
            >
              {[...Array(item.inStock).keys()].map((i) => (
                <option value={i + 1} key={i}>
                  {i + 1}
                </option>
              ))}
            </CardSelect>
          </CardQtyContainer>
          <button onClick={() => handleDelete(item._id)}>Delete</button>
        </CardInfoWrapper>
      </CardInfoContainer>
    </CardItemWrapper>
  );
};

export default CartItem;
