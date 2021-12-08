import { useSelector } from "react-redux";
import {
  CardTotalContainer,
  CartCard,
  CartContainer,
  TotalValue,
} from "../styles/CartStyles/CartStyle";
import CartItem from "./CartItem";

const Cart = () => {
  const products = useSelector((state) => state.cart);

  const getCartTotal = () =>
    products.products.reduce(
      (price, item) =>
        item.sale
          ? item.sale * item.quantity + price
          : item.price * item.quantity + price,
      0
    );
  return (
    <CartContainer>
      <CartCard>
        {products.quantity === 0 ? (
          <h1>You're cart is empty</h1>
        ) : (
          <>
            {products.products.map((item) => {
              return (
                <CartItem item={item} products={products} key={item._id} />
              );
            })}
          </>
        )}
      </CartCard>
      {products.quantity === 0 ? null : (
        <CardTotalContainer>
          <div>
            Total price:
            <TotalValue> {getCartTotal()}</TotalValue>
          </div>
          <div>
            Total item count:
            <TotalValue>{products.quantity}</TotalValue>
          </div>
        </CardTotalContainer>
      )}
    </CartContainer>
  );
};

export default Cart;
