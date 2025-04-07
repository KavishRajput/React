import { BrowserRouter,Routes,Route } from "react-router";
import { Services } from "./Pages/Services";
import { Help } from "./Pages/Help";
import { About } from "./Pages/About";
import { Contacts } from "./Pages/Contacts";
import { Products } from "./Pages/Products";
import { Errorpage } from "./Pages/ErrorPage";
import App from "./App";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const Layout = () => {

  return(
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/*" element={<Errorpage />} />
    <Route path="/" element={<App />} />
    <Route path="/services" element={<Services />} />
    <Route path="/help" element={<Help />} />
    <Route path="/about" element={<About />} />
    <Route path="/contacts" element={<Contacts />} />
    <Route path="/products" element={<Products />} />
    <Route path="/error" element={<Errorpage />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
};
