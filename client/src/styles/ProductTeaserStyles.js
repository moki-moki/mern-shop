import styled from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const ProductTeaserImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
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
