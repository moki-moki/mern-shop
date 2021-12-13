import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3em;
  position: sticky;
  top: 0;
  z-index: 3;
  background: ${({ theme }) => theme.colors.body};
`;

export const NavbarLinksContainer = styled.div`
  width: 40%;
`;

export const NavbarLinks = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
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
