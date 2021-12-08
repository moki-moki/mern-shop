import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  NavbarContainer,
  NavbarLinks,
  NavbarLinksAtag,
  NavbarLinksContainer,
  NavbarLinksLi,
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
            <NavbarLinksAtag to="/cart">Cart {quantity}</NavbarLinksAtag>
          </NavbarLinksLi>
        </NavbarLinks>
      </NavbarLinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
