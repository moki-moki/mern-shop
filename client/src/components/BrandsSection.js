import Logo1 from "../images/logos/logo1";
import Logo2 from "../images/logos/logo2";
import Logo3 from "../images/logos/logo3";
import {
  BrandContainer,
  BrandHeading,
  BrandSection,
  BrandSlide,
  BrandTrackSlider,
} from "../styles/BrandStyles";

const BrandsSection = () => {
  return (
    <BrandSection>
      <BrandHeading>Our Brands</BrandHeading>
      <BrandContainer>
        <BrandTrackSlider>
          <BrandSlide>
            <Logo1 />
          </BrandSlide>
          <BrandSlide>
            <Logo2 />
          </BrandSlide>
          <BrandSlide>
            <Logo3 />
          </BrandSlide>
          <BrandSlide>
            <Logo1 />
          </BrandSlide>
          <BrandSlide>
            <Logo2 />
          </BrandSlide>
          <BrandSlide>
            <Logo3 />
          </BrandSlide>
          <BrandSlide>
            <Logo1 />
          </BrandSlide>
          <BrandSlide>
            <Logo2 />
          </BrandSlide>
          <BrandSlide>
            <Logo3 />
          </BrandSlide>
          <BrandSlide>
            <Logo1 />
          </BrandSlide>
          <BrandSlide>
            <Logo2 />
          </BrandSlide>
          <BrandSlide>
            <Logo3 />
          </BrandSlide>
          <BrandSlide>
            <Logo1 />
          </BrandSlide>
          <BrandSlide>
            <Logo2 />
          </BrandSlide>
          <BrandSlide>
            <Logo3 />
          </BrandSlide>
          <BrandSlide>
            <Logo1 />
          </BrandSlide>
          <BrandSlide>
            <Logo2 />
          </BrandSlide>
          <BrandSlide>
            <Logo3 />
          </BrandSlide>
        </BrandTrackSlider>
      </BrandContainer>
    </BrandSection>
  );
};

export default BrandsSection;
