import { FooterContainer } from "../styles/FooterStyles";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterContainer> Copyright &#169; by moki-moki {year} </FooterContainer>
  );
};

export default Footer;
