import styled from "styled-components";

export const ProductTeaserImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
`;

export const ProductFavIconContainer = styled.div`
  display: flex;
  position: absolute;
  border: 1px solid ${({ theme }) => theme.colors.headings};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.cardBg};
  top: 3%;
  left: 92%;
  padding: 0.5em;
  cursor: pointer;
  transition: 0.3s ease all;

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
    border-color: ${({ theme }) => theme.colors.hover};
  }

  &:hover > :nth-child(1) {
    color: ${({ theme }) => theme.colors.body};
  }
`;

export const ProductDeleteIconContainer = styled.div`
  display: flex;
  position: absolute;
  border: 1px solid ${({ theme }) => theme.colors.headings};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.cardBg};
  top: 15%;
  left: 92%;
  padding: 0.5em;
  cursor: pointer;
  transition: 0.3s ease all;

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
    border-color: ${({ theme }) => theme.colors.hover};
  }

  &:hover > :nth-child(1) {
    color: ${({ theme }) => theme.colors.body};
  }
`;

export const ProductTeaserCardText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin: 0.3em 0;
`;

export const ProductPriceTag = styled.span`
  color: #9e162f;
  display: block;
  text-decoration: line-through;
  font-size: 0.7em;
`;

export const ProductSalePrice = styled.span`
  color: ${({ theme }) => theme.colors.price};
`;

export const ProductBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
