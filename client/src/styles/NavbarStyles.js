import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3em;
`;

export const NavbarLinksContainer = styled.div`
  width: 30%;
`;

export const NavbarLinks = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const NavbarLinksLi = styled.li`
  cursor: pointer;
  transition: 0.2s ease color;
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
