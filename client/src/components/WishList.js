import { useSelector } from "react-redux";
import styled from "styled-components";
import WishListProducts from "./WishListProducts";

const WishList = () => {
  const WishListGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 5em;
    width: 100%;
  `;

  const EmptyWishList = styled.div`
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const { list, qty } = useSelector((state) => state.wishList);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Your Wish List</h2>
      {qty === 0 ? (
        <EmptyWishList>
          <h3 style={{ textAlign: "center" }}>Your Wish List is empty :(</h3>
        </EmptyWishList>
      ) : (
        <>
          <WishListGrid>
            {list.map((item, idx) => {
              return <WishListProducts key={idx} item={item} />;
            })}
          </WishListGrid>
        </>
      )}
    </div>
  );
};

export default WishList;
