import { useSelector } from "react-redux";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import {
  NavbarContainer,
  NavbarLinks,
  NavbarLinksAtag,
  NavbarLinksContainer,
  NavbarLinksLi,
  NavbarQtyNumber,
} from "../styles/NavbarStyles";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const { qty } = useSelector((state) => state.wishList);

  return (
    <NavbarContainer>
      <h3>Logo</h3>
      <NavbarLinksContainer>
        <NavbarLinks>
          <NavbarLinksLi>
            <NavbarLinksAtag to="/"> Home</NavbarLinksAtag>
          </NavbarLinksLi>
          <NavbarLinksLi>
            <NavbarLinksAtag to="/allProducts"> All Products </NavbarLinksAtag>
          </NavbarLinksLi>
          <NavbarLinksLi>
            <NavbarLinksAtag to="/wishlist">
              <AiOutlineHeart />
              <span>Wish List</span>
              <NavbarQtyNumber>
                <span>{qty}</span>
              </NavbarQtyNumber>
            </NavbarLinksAtag>
          </NavbarLinksLi>

          <NavbarLinksLi>
            <NavbarLinksAtag to="/cart">
              <AiOutlineShoppingCart />
              <span> {quantity} </span>
            </NavbarLinksAtag>
          </NavbarLinksLi>
        </NavbarLinks>
      </NavbarLinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
