import {
  Card,
  CardCategoryTag,
  CardDesc,
  CardFeatured,
  CardHeading,
  CardHeadingContainer,
  CardImg,
  CardLink,
  CardPriceTag,
  CardText,
} from "../styles/ShowcaseStyles";

const ShowcaseCards = ({ item }) => {
  return (
    <Card>
      <CardImg src={item.image} />
      <CardHeadingContainer>
        <CardHeading>{item.name}</CardHeading>
      </CardHeadingContainer>
      <CardDesc>
        <div>
          <CardText>
            Price: <CardPriceTag> ${item.price}</CardPriceTag>
          </CardText>
          <CardText>
            <CardCategoryTag>Category</CardCategoryTag>: {item.category}
          </CardText>
        </div>
        <CardLink to={`/product/${item._id}`}>View</CardLink>
      </CardDesc>
      <CardFeatured>Featured</CardFeatured>
    </Card>
  );
};

export default ShowcaseCards;
