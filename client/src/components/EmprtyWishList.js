import { EmptyWishListContainer } from "../styles/WishList/EmprtyWishList";

const EmprtyWishList = () => {
  return (
    <EmptyWishListContainer>
      <h1>
        You're Cart is empty,
        <EmprtyWishList to="/">back to shop</EmprtyWishList>.
      </h1>
    </EmptyWishListContainer>
  );
};

export default EmprtyWishList;
