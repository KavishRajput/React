import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router";
import { titles } from "./utills/titles";
import { useLocation } from "react-router";
import { Online } from "./components/online";
import { useEffect } from "react";
export const Layout = () => {
  const Dynamictitles=()=>{
    const location = useLocation();
    useEffect(()=>{

      console.log(location.pathname)
      document.title=titles[location.pathname]
    },[location.pathname])

  }
  return (
    <>
    <Online />
    <Dynamictitles />
    <Navbar />
    <Outlet />
    <Footer />
    </>
)
};
