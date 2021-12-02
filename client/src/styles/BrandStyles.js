import styled, { keyframes } from "styled-components";

const slide = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-250px * 9));
    }
`;

export const BrandSection = styled.section`
  margin: 3em 0;
`;

export const BrandHeading = styled.h2`
  margin: 0 0 1em 1em;
`;

export const BrandContainer = styled.div`
  margin: auto;
  height: 250px;
  position: relative;
  width: 95%;
  display: grid;
  place-items: center;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.headings};
  border-radius: 15px;
`;

export const BrandTrackSlider = styled.div`
  display: flex;
  width: calc(250px * 18);
  animation: ${slide} 40s linear infinite;
`;

export const BrandSlide = styled.div`
  height: 250px;
  width: 250px;
  display: flex;
  align-items: center;
  padding: 15px;
`;
