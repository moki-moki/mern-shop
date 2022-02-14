import {
  EmptyCardContainer,
  EmptyCartLink,
} from "../styles/CartStyles/EmptyCartStyles";

const EmptyCart = () => {
  return (
    <EmptyCardContainer>
      <h1>
        Your Cart is empty, <EmptyCartLink to="/">back to shop</EmptyCartLink>.
      </h1>
    </EmptyCardContainer>
  );
};

export default EmptyCart;
