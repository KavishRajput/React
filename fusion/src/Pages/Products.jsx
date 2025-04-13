import { useParams } from "react-router"
import useCallApi from "../utills/useCallApi";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

export const Products=()=>{
  const params = useParams(); 
  const{id}=params;

  const singleproduct = useCallApi(`https://dummyjson.com/products/${id}`);
  if (!singleproduct) return <div className="text-center mt-20 text-xl">Loading product...</div>;


    // async function Singleproduct(){
    //   const response = await fetch(`https://dummyjson.com/products/${id}`);
    //   const data = await response.json()
    //   console.log(data)
    //   setSingleproduct(data)
      
    // }
    
    // useEffect(()=>{
    //   Singleproduct()
    // },[])
   
    return (
        <>
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap ">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded border-2 border-gray-500" src={singleproduct.thumbnail}></img>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{singleproduct.brand}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{singleproduct.title}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <span className="text-gray-600 ml-3">{singleproduct.rating} Reviews</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500">
            <FaTwitter className="text-xl"/>
            </a>
            <a className="text-gray-500">
            <FaInstagram className="text-xl"/>
            </a>
            <a className="text-gray-500">
            <FaFacebookF className="text-xl"/>
            </a>
          </span>
        </div>
        <p className="leading-relaxed">{singleproduct.description}</p>
        <div className="flex mt-10">
          <span className="title-font font-medium text-2xl text-gray-900"></span>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy</button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
          <FaHeart color="#fa7377" size={25}/>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}