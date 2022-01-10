import styled from "styled-components";
import { Link } from "react-router-dom";

export const EmptyCardContainer = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmptyCartLink = styled(Link)`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.hover};
`;
