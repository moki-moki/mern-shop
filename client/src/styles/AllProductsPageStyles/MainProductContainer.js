import styled from "styled-components";

export const AllProductsPageContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const AllProductsContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
`;
