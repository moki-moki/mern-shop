import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductPreview, getShowcaseProducts } from "../redux/thunk";
import BrandsSection from "./BrandsSection";
import Carousel from "./Carousel";
import Features from "./Features";
import Loader from "./Loader";
import ProductPreview from "./ProductPreview";
import Showcase from "./Showcase";

const Homepage = () => {
  const dispatch = useDispatch();
  // SHOWCASE
  const { product, status } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getShowcaseProducts());
  }, [dispatch]);

  // ProductPreview
  const { list, loading } = useSelector((state) => state.previewProducts);

  useEffect(() => {
    dispatch(getProductPreview());
  }, [dispatch]);

  return (
    <>
      {loading && status !== "success" ? (
        <Loader />
      ) : (
        <div>
          <Carousel />
          <Features />
          <Showcase posts={product} />
          <BrandsSection />
          <ProductPreview list={list} />
        </div>
      )}
    </>
  );
};

export default Homepage;
