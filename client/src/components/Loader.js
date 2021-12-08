import React from "react";
import styled, { keyframes } from "styled-components";

const Loader = () => {
  const skBounce = keyframes`
      0%,
      100% {
        transform: scale(0);
      }
      50% {
        transform: scale(1);
      }
  `;
  const LoaderContainer = styled.div`
    width: 40px;
    height: 40px;
    position: relative;
    margin: 100px auto;
  `;

  const LoaderBubble = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.hover};
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    animation: ${skBounce} 2s infinite ease-in-out;
  `;

  return (
    <LoaderContainer>
      <LoaderBubble></LoaderBubble>
      <LoaderBubble></LoaderBubble>
    </LoaderContainer>
  );
};

export default Loader;
