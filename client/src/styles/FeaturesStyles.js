import styled from "styled-components";
import { Link } from "react-router-dom";

export const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 3em auto;
  border: 1px solid ${({ theme }) => theme.colors.headings};
  border-radius: 15px;
  width: 80%;
  padding: 1em;
`;

export const FeaturesCard = styled.div`
  padding: 1em;
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 15px;
  display: flex;
  /* align-items: center; */
  font-size: 1.3em;
`;

export const FeaturesCardText = styled.p`
  margin: 0 0.3em;
  font-size: 0.8em;
  font-weight: 500;
`;

export const FeaturesCardLink = styled(Link)`
  font-size: 0.6em;
  margin: 0 0.3em;
  text-decoration: underline;
`;
