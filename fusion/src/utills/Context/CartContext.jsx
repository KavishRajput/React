import { createContext, useState } from "react";
import toast from "react-hot-toast";
// Cart and auth
export const CartContext=createContext()
export const CartProvider=({children})=>{
    const [cart,setCart]=useState([])
    const [auth,setAuth]=useState(false)

    // add item to cart
    function add_to_cart(item){
        const exists=cart.find((v)=>v.id===item.id)
        if(exists){
            toast.error('Product Already Exists!')
            return
        }
        setCart([...cart,{...item,qty:1}])
        toast.success('Sucessfully added To Cart!')
    }

    // one item remove from cart
    const remove_from_cart=(prod)=>{
        console.log(prod)
        setCart([...cart.filter((Product)=>Product.id!==prod.id)])
    }

    // clear all cart
    const clear_cart=()=>{
        setCart([])
        toast.success("Cart Cleared")
    }

    // increase quantity
        const inc_quantity=(product)=>{
            const newcart=cart.map((item)=>item.id===product.id?{...product,qty:product.qty+1}:item)
            setCart([...newcart])
        }
    // decrease quantity
        const dec_quantity=(product)=>{
            const newcart=cart.map((item)=>item.id===product.id && product.qty>1?{...product,qty:product.qty-1}:item)
            setCart([...newcart])
        }

    // Total Price
    const total_price=()=>{
        const total=cart.reduce((acc,item)=>(acc+(item.price*item.qty)),0)
        return Math.round(total * 100) / 100;
    }

    // Login
    const login=()=>{
        setAuth(true)
        toast.success("Logged In Sucessfully")
    }

    // Logout
    const logout=()=>{
        setAuth(false)
        toast.success("Logout Sucessfully")
    }

    return(
        <>
            <CartContext.Provider value={{cart,add_to_cart,remove_from_cart,clear_cart,inc_quantity,dec_quantity,total_price,login,logout,auth}}>
                {children}
            </CartContext.Provider>
        </>
    )
};
export default CartProvider;