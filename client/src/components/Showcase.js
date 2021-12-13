import {
  CardSubHeading,
  ShowcaseContainer,
  ShowcaseHeading,
  ShowcaseHeadingContainer,
  ShowcaseSection,
} from "../styles/ShowcaseStyles";
import ShowcaseCards from "./ShowcaseCards";

const Showcase = ({ posts }) => {
  return (
    <ShowcaseSection>
      <ShowcaseHeadingContainer>
        <ShowcaseHeading>SHOWCASE</ShowcaseHeading>
        <CardSubHeading>Deals you shouldn't miss!</CardSubHeading>
      </ShowcaseHeadingContainer>
      <ShowcaseContainer>
        {posts.map((item, idx) => {
          return <ShowcaseCards key={idx} item={item} />;
        })}
      </ShowcaseContainer>
    </ShowcaseSection>
  );
};

export default Showcase;
