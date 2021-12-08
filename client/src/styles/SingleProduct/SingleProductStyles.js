import styled from "styled-components";

export const SingleProductContainer = styled.div`
  max-width: 1204px;
  margin: 0 auto;
  display: flex;
`;

export const ImageContainer = styled.div`
  padding: 0 1em;
  width: 45%;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 15px;
`;

export const ProductInfoContainer = styled.div`
  padding: 1em;
  width: 45%;
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: 15px;
`;

export const ProductBtnContainer = styled.div`
  margin: 1em 0;
`;

export const ProductHeading = styled.h3``;

export const ProductDesc = styled.p``;

export const ProductPrice = styled.span``;

export const ProductInfoInputWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 2px solid ${({ theme }) => theme.colors.body};
  border-bottom: 2px solid ${({ theme }) => theme.colors.body};
  padding: 1em;
  margin: 1em 0;
`;

export const ProductInfoInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  font-size: 1.5em;
  width: 10%;
`;

export const ProductInfoButtonPlus = styled.button`
  position: absolute;
  border: none;
  left: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1em;
  padding: 0;
`;

export const ProductInfoButtonMinus = styled.button`
  position: absolute;
  border: none;
  padding: 0;
  right: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1em;
`;

export const ProductInfoQty = styled.span`
  display: block;
  border: 3px solid ${({ theme }) => theme.colors.body};
  border-radius: 15px;
  padding: 0.3em 1em;
`;

export const ProductHeadingContainer = styled.div`
  margin: 1em 0;
`;

export const ProductBuyBtn = styled.button`
  border: 3px solid ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.3em 1em;
  font-size: 1em;
`;

export const ProductSubHeading = styled.span`
  color: ${({ theme }) => theme.colors.lightHeadings};
`;

export const ProductPriceCatWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
