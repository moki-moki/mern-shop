import styled from "styled-components";

export const SuccessMessageHeading = styled.h3`
  position: absolute;
  top: 11%;
  color: #63b73c;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.price};
  background: ${({ theme }) => theme.colors.cardBg};
  padding: 0.5em;
  border-radius: 15px;
`;
