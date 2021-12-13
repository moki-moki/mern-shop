import { Routes, Route } from "react-router-dom";
// Redux
// Style
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";
// Pages
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import AllProductsPage from "./components/AllProductsPage";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Notification from "./components/Notification";
import WishList from "./components/WishList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/allProducts" element={<AllProductsPage />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
      <Notification />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
