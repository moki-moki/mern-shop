import styled from "styled-components";

export const NotificationContainer = styled.div`
  position: fixed;
  top: 50px;
  left: 68%;
  width: 30%;
  height: 35px;
  margin: 0 auto;
  background-color: #63b73c;
  border-radius: 10px;
  animation: enter-leave 3s ease-in-out;
  @keyframes enter-leave {
    0% {
      top: -60px;
    }
    7.5% {
      top: 16px;
    }
    92.5% {
      top: 16px;
    }
    100% {
      top: -60px;
    }
  }
`;

export const NotificationTextWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 1em;
`;

export const NotificationHeading = styled.h5`
  color: ${({ theme }) => theme.colors.body};
`;
