import { useSelector } from "react-redux";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import {
  HamburgerContainer,
  Logo,
  NavbarContainer,
  NavbarLinks,
  NavbarLinksAtag,
  NavbarLinksContainer,
  NavbarLinksLi,
  NavbarQtyNumber,
  NavbarUlContainer,
} from "../styles/NavbarStyles";
import { useState } from "react";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const { qty } = useSelector((state) => state.wishList);
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  return (
    <NavbarContainer isOpen={open}>
      <Logo>Logo</Logo>
      <NavbarLinksContainer>
        <NavbarUlContainer>
          <NavbarLinks isOpen={open}>
            <NavbarLinksLi>
              <NavbarLinksAtag to="/"> Home</NavbarLinksAtag>
            </NavbarLinksLi>
            <NavbarLinksLi>
              <NavbarLinksAtag to="/allProducts">All Products</NavbarLinksAtag>
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
        </NavbarUlContainer>
      </NavbarLinksContainer>

      <HamburgerContainer onClick={() => toggleNavbar()}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerContainer>
    </NavbarContainer>
  );
};

export default Navbar;
