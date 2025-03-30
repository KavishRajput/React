import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Services } from "./Services";
import { Help } from "./Help";
import { About } from "./About";
import { Contacts } from "./Contacts";
import { Products } from "./product";
import { Cards } from "../components/Cards";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Errorpage } from "./ErrorPage";


const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Errorpage />,
  },
  {
    path: "/",
    element: <MainLayout><Cards /></MainLayout>,
  },
  {
    path: "/about",
    element: <MainLayout><About /></MainLayout>,
  },
  {
    path: "/contacts",
    element: <MainLayout><Contacts /></MainLayout>,
  },
  {
    path: "/services",
    element: <MainLayout><Services /></MainLayout>,
  },
  {
    path: "/help",
    element: <MainLayout><Help /></MainLayout>,
  },
  {
    path: "/products",
    element: <MainLayout><Products /></MainLayout>,
  },
]);

export const Layout = () => {
  return <RouterProvider router={router} />;
};
