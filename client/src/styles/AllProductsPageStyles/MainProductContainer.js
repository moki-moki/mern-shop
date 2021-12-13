import styled from "styled-components";

export const AllProductsPageContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
`;

export const AllProductsContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 3em;
`;
