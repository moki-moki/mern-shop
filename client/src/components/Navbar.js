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

const Navbar = ({ admin }) => {
  const quantity = useSelector((state) => state.cart.quantity);
  const { qty } = useSelector((state) => state.wishList);
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  const handleSignOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <NavbarContainer isOpen={open}>
      <Logo>Logo</Logo>
      <NavbarLinksContainer isOpen={open}>
        <NavbarUlContainer>
          <NavbarLinks isOpen={open}>
            <NavbarLinksLi>
              <NavbarLinksAtag to="/"> Home</NavbarLinksAtag>
            </NavbarLinksLi>
            <NavbarLinksLi>
              <NavbarLinksAtag to="/allProducts">All Products</NavbarLinksAtag>
            </NavbarLinksLi>
            {/* admin */}
            {admin ? (
              <NavbarLinksLi>
                <NavbarLinksAtag to="/addProduct">Add Product</NavbarLinksAtag>
              </NavbarLinksLi>
            ) : null}
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
            <NavbarLinksLi>
              <button onClick={() => handleSignOut()}>Sign Out</button>
            </NavbarLinksLi>
          </NavbarLinks>
        </NavbarUlContainer>
      </NavbarLinksContainer>

      <HamburgerContainer onClick={() => toggleNavbar()}>
        <span
          style={
            open ? { transform: "rotate(45deg)", position: "absolute" } : null
          }
        ></span>
        <span style={open ? { display: "none" } : null}></span>
        <span style={open ? { transform: "rotate(-45deg)" } : null}></span>
      </HamburgerContainer>
    </NavbarContainer>
  );
};

export default Navbar;
