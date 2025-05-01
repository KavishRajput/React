import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router";
import { titles } from "./utills/titles";
import { useLocation } from "react-router";
import { Online } from "./components/online";
import { useEffect } from "react";
import { CartProvider } from "./utills/Context/CartContext"; // named import
import {WishProvider} from "./utills/Context/wishContext"; // default import

export const Layout = () => {
  const Dynamictitles = () => {
    const location = useLocation();
    useEffect(() => {
      console.log(location.pathname);
      document.title = titles[location.pathname] || "Fusion E-Commerce";
    }, [location.pathname]);

    return null;
  };

  return (
    <>
      <Online />
      <Dynamictitles />
      <CartProvider>
        <WishProvider>
          <Navbar />
          <Outlet />
          <Footer />
        </WishProvider>
      </CartProvider>
    </>
  );
};
