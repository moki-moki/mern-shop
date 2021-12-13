import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background-color: ${({ theme }) => theme.colors.cardBg};
`;
