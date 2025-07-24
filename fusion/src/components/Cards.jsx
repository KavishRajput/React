import { Link } from "react-router"
import { useContext } from "react"
import { wishContext } from "../utills/Context/wishContext"
import { FaHeart } from "react-icons/fa6";
export const Cards=(props)=>{
    const {add_to_wish}=useContext(wishContext)

    const thumbnail=props.data.thumbnail
    const brand=props.data.brand
    const title=props.data.title
    const price=props.data.price
    const rating=props.data.rating
    const id=props.data.id

    return (
        <>
        <div className="border-2 border-gray-600 p-3 rounded-lg cursor-pointer w-80 py-4 m-7">
            <button className="rounded-full w-10 h-10 bg-gray-200 ml-4 flex items-center justify-center hover:bg-pink-100 transition">
                <FaHeart color="#fa7377" size={25} onClick={()=>add_to_wish(props.data)}/>
            </button>
            <Link to={`/products/${id}`}>
            <img src={thumbnail} alt="" className="w-sm h-60 rounded-lg"/>
            <p className="text-gray-600 capitalize text-xl font-bold px-3 mt-4">{brand}</p>
            <p className="text-black text-lg font-bold tracking-tight px-3 mt-1">{title}</p>
            <div className="flex items-center justify-between px-3 mt-1">
                <p className="text-black font-bold text-lg">₹ {price}</p>
                <p className="text-black font-bold text-lg">⭐{rating}</p>
            </div>
            </Link>
            <div>{props.children}</div>
        </div>
        </>
    )
}