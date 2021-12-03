import {
  CardSubHeading,
  ShowcaseContainer,
  ShowcaseHeading,
  ShowcaseHeadingContainer,
  ShowcaseSection,
} from "../styles/ShowcaseStyles";
import ShowcaseCards from "./ShowcaseCards";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShowcaseProducts } from "../redux/thunk";

const Showcase = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getShowcaseProducts());
  }, [dispatch]);

  return (
    <ShowcaseSection>
      <ShowcaseHeadingContainer>
        <ShowcaseHeading>SHOWCASE</ShowcaseHeading>
        <CardSubHeading>Deals you shouldn't miss!</CardSubHeading>
      </ShowcaseHeadingContainer>
      <ShowcaseContainer>
        {posts.list.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {posts.list.msg.map((item, idx) => {
              return <ShowcaseCards key={idx} item={item} />;
            })}
          </>
        )}
      </ShowcaseContainer>
    </ShowcaseSection>
  );
};

export default Showcase;
