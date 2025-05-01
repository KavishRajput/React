import { useParams } from "react-router";
import { useContext } from "react";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import useCallApi from "../utills/useCallApi";
import { wishContext } from "../utills/Context/wishContext";

export const Products = () => {
  const { add_to_wish } = useContext(wishContext);
  const { id } = useParams();
  const singleproduct = useCallApi(`https://dummyjson.com/products/${id}`);

  if (!singleproduct) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt={singleproduct.title}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded border-2 border-gray-300"
              src={singleproduct.thumbnail}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">{singleproduct.brand}</h2>
              <h1 className="text-gray-900 text-3xl title-font font-bold mb-1">{singleproduct.title}</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <span className="text-gray-600 ml-3">{singleproduct.rating} ★ Rating</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-3">
                  <FaTwitter className="text-xl text-gray-500 hover:text-blue-400 cursor-pointer" />
                  <FaInstagram className="text-xl text-gray-500 hover:text-pink-400 cursor-pointer" />
                  <FaFacebookF className="text-xl text-gray-500 hover:text-blue-600 cursor-pointer" />
                </span>
              </div>
              <p className="leading-relaxed">{singleproduct.description}</p>
              <div className="flex mt-10 items-center">
                <span className="text-3xl font-bold text-black">{`₹ ${singleproduct.price}`}</span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 rounded hover:bg-indigo-600 transition">
                  Buy Now
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 ml-4 flex items-center justify-center hover:bg-pink-100 transition">
                  <FaHeart color="#fa7377" size={25} onClick={()=>add_to_wish(singleproduct)}/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-semibold text-gray-700">Feedback</h1>
          <p className="mt-4 text-gray-500">Share your thoughts about this product!</p>
        </div>
      </section>
    </>
  );
};
