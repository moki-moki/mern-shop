import styled from "styled-components";

export const NotificationContainer = styled.div`
  position: fixed;
  z-index: 4;
  top: 90%;
  left: 15px;
  width: 30%;
  height: 35px;
  margin: 0 auto;
  border-radius: 10px;
  background: #63b73c;
  animation: enter-leave 3s ease-in-out;

  &::after {
    content: "";
    display: block;
    position: relative;
    top: -3px;
    background-color: ${({ theme }) => theme.colors.body};
    width: 0;
    height: 3px;
    animation: loading 3s ease-in-out;
  }

  @keyframes loading {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }

  @keyframes enter-leave {
    0% {
      left: -260px;
      display: block;
    }
    7.5% {
      left: 15px;
      display: block;
    }
    92.5% {
      left: 15px;
      display: block;
    }
    100% {
      left: -360px;
      display: block;
    }
  }
`;

export const NotificationTextWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const NotificationHeading = styled.h5`
  color: ${({ theme }) => theme.colors.body};
`;
