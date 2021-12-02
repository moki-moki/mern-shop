import React from "react";
import BrandsSection from "./BrandsSection";
import Carousel from "./Carousel";
import Features from "./Features";
import ProductPreview from "./ProductPreview";
import Showcase from "./Showcase";

const Homepage = () => {
  return (
    <div>
      <Carousel />
      <Features />
      <Showcase />
      <BrandsSection />
      <ProductPreview />
    </div>
  );
};

export default Homepage;
