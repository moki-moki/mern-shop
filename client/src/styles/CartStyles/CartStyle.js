import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CartCard = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* justify-content: space-evenly; */
`;

export const CardItemWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 0.5em 0;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.cardBg};
`;

export const CardImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 15px 0 0 15px;
`;

export const CardInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const CardInfoWrapper = styled.div`
  width: 100%;
  padding: 0.5em;
  border-right: 2px solid ${({ theme }) => theme.colors.body};
`;

export const CardSaleWrapper = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;

export const CardPriceTag = styled.span`
  color: #9e162f;
  text-decoration: line-through;
  font-size: 0.5em;
  display: block;
`;

export const CardSaleTag = styled.span`
  font-weight: 500;
  color: #63b73c;
`;

export const CardSaleInnerWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const CardPriceTagWrapper = styled.p`
  margin: 0 0.3em;
`;

export const CardQtyContainer = styled.div`
  margin: 0.5em 0;
  font-weight: 500;
  font-size: 1.3em;
`;

export const CardSelect = styled.select`
  background-color: ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.lightHeadings};
  padding: 0.5em;
  margin: 0 0.3em;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.headings};
  option {
    color: ${({ theme }) => theme.colors.text};
    background: none;
  }
`;

export const CardTotalContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 15px;
  padding: 1em;
  display: flex;
  justify-content: space-between;
`;

export const TotalValue = styled.span`
  font-weight: bold;
  margin: 0 0.3em;
`;
