import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  NavbarContainer,
  NavbarLinks,
  NavbarLinksAtag,
  NavbarLinksContainer,
  NavbarLinksLi,
  NavbarQtyCart,
} from "../styles/NavbarStyles";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

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
