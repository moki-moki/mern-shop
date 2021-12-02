import styled from "styled-components";
import { Link } from "react-router-dom";

export const ShowcaseSection = styled.section`
  width: 100%;
  margin: 3em 0;
`;

export const ShowcaseHeading = styled.h2``;

export const ShowcaseHeadingContainer = styled.div`
  padding: 0 1em;
  margin: 0 0 1em 1em;
`;

export const ShowcaseContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  position: relative;
  padding-bottom: 1em;
  margin: 1em;
  border-radius: 15px;
`;

export const CardHeading = styled.h3`
  margin-bottom: 1em;
`;

export const CardHeadingContainer = styled.div`
  padding: 0 1em;
`;

export const CardSubHeading = styled.h4`
  color: ${({ theme }) => theme.colors.lightHeadings};
`;

export const CardDesc = styled.div`
  text-align: start;
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardImg = styled.img`
  width: 300px;
  border-radius: 15px 15px 0 0;
`;

export const CardText = styled.p`
  font-size: 0.8em;
`;

export const CardFeatured = styled.span`
  display: block;
  padding: 0.3em;
  border-radius: 20px 0 0 20px;
  top: 10%;
  left: -3%;
  position: absolute;
  color: white;
  background-color: #9e162f;
  font-size: 0.7em;
`;

export const CardLink = styled(Link)`
  border: 1px solid ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 10px;
  padding: 0.3em;
  transition: 0.2s ease all;

  &:hover {
    border-radius: 0;
  }
`;

export const CardPriceTag = styled.span`
  color: ${({ theme }) => theme.colors.price};
`;

export const CardCategoryTag = styled.span`
  color: ${({ theme }) => theme.colors.category};
`;
