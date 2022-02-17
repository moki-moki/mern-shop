import {
  CarouselBtn,
  CarouselBtnContainer,
  CarouselContainer,
  CarouselImages,
  CarouselImaggesContainer,
} from "../styles/CarouselStyles";
import { images } from "../data/images";
import { useState } from "react";

const Carousel = () => {
  const [slideIdx, setSlideIdx] = useState(0);
  const [carImages] = useState(images);

  const slideDot = (idx) => {
    setSlideIdx(idx);
  };

  return (
    <CarouselContainer>
      <CarouselImaggesContainer>
        {carImages.map((img, idx) => {
          return (
            <>
              {idx === slideIdx && <CarouselImages key={idx} src={img.image} />}
            </>
          );
        })}
      </CarouselImaggesContainer>
      <CarouselBtnContainer>
        {Array.from({ length: 3 }).map((item, idx) => (
          <CarouselBtn onClick={() => slideDot(idx)} key={idx} />
        ))}
      </CarouselBtnContainer>
    </CarouselContainer>
  );
};

export default Carousel;
