import { Link } from "react-router-dom";
import {
  NavbarContainer,
  NavbarLinks,
  NavbarLinksAtag,
  NavbarLinksContainer,
  NavbarLinksLi,
} from "../styles/NavbarStyles";

const Navbar = () => {
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
            <NavbarLinksAtag to="/cart">Cart</NavbarLinksAtag>
          </NavbarLinksLi>
        </NavbarLinks>
      </NavbarLinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
