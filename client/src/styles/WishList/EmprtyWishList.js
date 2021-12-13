import styled from "styled-components";
import { Link } from "react-router-dom";

export const EmptyWishListContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmptyWishListLink = styled(Link)`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.hover};
`;
