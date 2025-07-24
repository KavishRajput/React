import {BrowserRouter,Routes,Route} from "react-router-dom"
import App from "../App"
import { Contact } from "./Contact"
import { About } from "./About"
import { Services } from "./Services"
import {Header} from "../Components/Header"
import {Footer} from "../Components/Footer"
import { Colorpicker } from "../Components/Colorpicker"
import { Product_Description } from "./Product_Description"
export const Layout=()=>{
    
    return (
        <>
        <BrowserRouter>
            <div className="colorpickerwrapper">
            <Colorpicker colour="#ECDFCC"/>
            <Colorpicker colour="#B9B4C7"/>
            <Colorpicker colour="#DCD7C9"/>
            <Colorpicker colour="#9DB2BF"/>
            </div>
        <Header />
          <Routes>
            <Route path="/*" element={<App />}></Route>
            <Route path="/about" element={<About />}></Route >
            <Route path="/services" element={<Services />}></Route >
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/product/:id" element={<Product_Description />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
        </>
    )
}