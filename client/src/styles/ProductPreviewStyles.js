import styled from "styled-components";

export const PrewviewContainer = styled.div`
  margin-bottom: 1em;
`;

export const PreviewHeading = styled.h2`
  margin: 0 0 1em 1em;
`;

export const PreviewCardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const ProductViewAllLink = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.cardBg};
  border-radius: 15px;
  height: 95%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.5em;
  transition: 0.2s ease all;
  &:hover {
    background: ${({ theme }) => theme.colors.cardBg};
  }
`;
