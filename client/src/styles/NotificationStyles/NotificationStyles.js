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
  /* &.success {
    background-color: #63b73c;
  }
  &.error {
    background-color: #9e162f;
  } */

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
      top: -60px;
      display: block;
    }
    7.5% {
      top: 16px;
      display: block;
    }
    92.5% {
      top: 16px;
      display: block;
    }
    100% {
      top: -60px;
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
