import { Routes, Route, Navigate, Outlet } from "react-router-dom";
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
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  const PrivateRoute = () => {
    const isAuth = user;
    return isAuth ? <Outlet /> : <Login />;
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {user ? <Navbar /> : null}
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/allProducts" element={<AllProductsPage />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
        </Route>
        <Route path="/login" element={user ? <Homepage /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
      <Notification />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
