import { NavLink } from "react-router";
import { IoCart } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { Profile } from "./Dropdown";
import { useState } from "react";
import { Cart } from "./Cart";
import { CartContext } from "../utills/Context/CartContext";
import { wishContext } from "../utills/Context/wishContext";
import  {Wishlist} from "../Pages/Wishlist"
import { useContext } from "react";
import { Protectedcart } from "./Protectedcart";
import logo from "../assets/Logo.png"
export const Navbar = () => { 
  // const cartCount = 3; 
  const obj=useContext(CartContext)
  const cart=obj.cart

  const {wish}=useContext(wishContext)
  
  const[iscartopen,setIscartopen]=useState(false)
  const[iswishopen,setIswishopen]=useState(false)
  const[isprofileopen,setIsprofileopen]=useState(false)

  return (
    <>
      <div className="bg-gray-900 flex items-center justify-around py-2 sticky top-0 z-10000">
        <img src={logo} alt="LOGO" />
        <ul className="text-white text-lg flex items-center justify-around capitalize w-100">
          <li className="hover:underline cursor-pointer text-lime-300">
            <NavLink to={"/"}>home</NavLink>
          </li>
          <li className="hover:underline cursor-pointer hover:text-lime-300">
            <NavLink to={"/about"}>about</NavLink>
          </li>
          <li className="hover:underline cursor-pointer hover:text-lime-300">
            <NavLink to={"/services"}>services</NavLink>
          </li>
          <li className="hover:underline cursor-pointer hover:text-lime-300">
            <NavLink to={"/contacts"}>contacts</NavLink>
          </li>
          <li className="hover:underline cursor-pointer hover:text-lime-300">
            <NavLink to={"/help"}>help</NavLink>
          </li>
        </ul>

        <div className="flex justify-around items-center w-60 gap-6">
          {/* Cart */}
          <div className="relative cursor-pointer" onClick={()=>{setIscartopen(!iscartopen)}}>
            <IoCart color="white" size={40} />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </div>
              {iscartopen && 
            <Protectedcart>
              <Cart />
            </Protectedcart>
              }
            {/* Wish */}
            <div className="relative cursor-pointer" onClick={()=>{setIswishopen(!iswishopen)}}>
              <FcLike color="white" size={40} />
                {wish.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {wish.length}
              </span>
            )}
            </div>
            {iswishopen && <Wishlist />}
            {/* Profile */}
          <span className="cursor-pointer" onClick={()=>{ setIsprofileopen(!isprofileopen)}}>
          <RiAccountPinCircleFill color="white" size={40} />
            {isprofileopen && <Profile />}
          </span>
        </div>
      </div>
    </>
  );
};
