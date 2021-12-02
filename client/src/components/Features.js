import {
  FeaturesCard,
  FeaturesCardLink,
  FeaturesCardText,
  FeaturesContainer,
} from "../styles/FeaturesStyles";
import { FaShippingFast } from "react-icons/fa";
import { BsBoxSeam, BsCurrencyDollar } from "react-icons/bs";
import { AiOutlineSafety } from "react-icons/ai";

const Features = () => {
  return (
    <FeaturesContainer>
      <FeaturesCard>
        <FaShippingFast />
        <div>
          <FeaturesCardText>Fast Shipping</FeaturesCardText>
          <FeaturesCardLink to="/">Learn more</FeaturesCardLink>
        </div>
      </FeaturesCard>
      <FeaturesCard>
        <BsCurrencyDollar />
        <div>
          <FeaturesCardText>Save Money</FeaturesCardText>
          <FeaturesCardLink to="/">Learn more</FeaturesCardLink>
        </div>
      </FeaturesCard>
      <FeaturesCard>
        <AiOutlineSafety />
        <div>
          <FeaturesCardText>Safe Paying</FeaturesCardText>
          <FeaturesCardLink to="/">Learn more</FeaturesCardLink>
        </div>
      </FeaturesCard>
      <FeaturesCard>
        <BsBoxSeam />
        <div>
          <FeaturesCardText>Big Selection</FeaturesCardText>
          <FeaturesCardLink to="/">Learn more</FeaturesCardLink>
        </div>
      </FeaturesCard>
    </FeaturesContainer>
  );
};

export default Features;
