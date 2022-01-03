import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;
`;

export const CarouselImaggesContainer = styled.div`
  height: 100%;
  width: 95%;
  margin: auto;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const CarouselImages = styled.img`
  width: 100%;
`;

export const CarouselBtnContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 95%;
`;

export const CarouselBtn = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: relative;
  margin: 0 10px;
  top: -5%;
  left: 47%;
  transform: translateX(-50%);
  cursor: pointer;
  background-color: black;
`;
