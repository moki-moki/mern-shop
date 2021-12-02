import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background-color: ${({ theme }) => theme.colors.cardBg};
  margin: auto;
`;
