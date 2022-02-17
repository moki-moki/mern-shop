import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 4em;
  border-bottom: 2px solid black;
  position: sticky;
  top: 0;
  z-index: 3;
  background: ${({ theme }) => theme.colors.body};

  @media (max-width: 1242px) {
    width: 100%;
    align-items: initial;
    transition: 0.3s ease height;
  }
`;

export const NavbarUlContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarLinksContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1242px) {
    width: 100%;
    position: absolute;
    z-index: ${({ isOpen }) => (isOpen ? "1" : "-1")};
    height: ${({ isOpen }) => (isOpen ? "100vh" : "0")};
  }
`;

export const Logo = styled.h3`
  margin: 0.5em 0;
  z-index: 4;
  display: flex;
  align-items: center;
`;

export const HamburgerContainer = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin: 0.5em 0;
  z-index: 4;

  span {
    height: 2px;
    width: 30px;
    background: ${({ theme }) => theme.colors.text};
    margin: 2px 0;
    transition: 0.3s ease all;
  }

  @media (max-width: 1242px) {
    display: flex;
    justify-content: center;
  }
`;

export const NavbarLinks = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  background: ${({ theme }) => theme.colors.body};

  @media (max-width: 1242px) {
    transform: translateY(${({ isOpen }) => (isOpen ? "0" : "-100vh")});
  }

  @media (max-width: 1242px) {
    flex-direction: column;
    height: 100vh;
    align-items: center;
    transition: 0.3s ease all;
    position: absolute;
  }
`;

export const NavbarLinksLi = styled.li`
  cursor: pointer;
  transition: 0.2s ease color;
  font-size: 1.3em;
  margin: 0 0.3em;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }
`;

export const NavbarLinksAtag = styled(Link)`
  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.hover};
    transition: 0.2s ease all;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const NavbarQtyNumber = styled.span`
  display: flex;
  position: absolute;
  height: 20px;
  width: 20px;
  top: -7px;
  left: -12px;
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 50%;
  font-size: 0.8em;
  padding: 0.5em;
  justify-content: center;
  align-items: center;
`;
