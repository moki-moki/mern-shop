import {
  CardSubHeading,
  ShowcaseContainer,
  ShowcaseHeading,
  ShowcaseHeadingContainer,
  ShowcaseSection,
} from "../styles/ShowcaseStyles";
import dummyData from "../data/dummyData.json";
import ShowcaseCards from "./ShowcaseCards";

const Showcase = () => {
  return (
    <ShowcaseSection>
      <ShowcaseHeadingContainer>
        <ShowcaseHeading>SHOWCASE</ShowcaseHeading>
        <CardSubHeading>Deals you shouldn't miss!</CardSubHeading>
      </ShowcaseHeadingContainer>
      <ShowcaseContainer>
        {dummyData.map((item, idx) => {
          return <ShowcaseCards key={idx} item={item} />;
        })}
      </ShowcaseContainer>
    </ShowcaseSection>
  );
};

export default Showcase;
