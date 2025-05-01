import { useOutlet } from "react-router-dom";
import { Services_Sidebar } from "../components/Services_Sidebar";
import { Link } from "react-router-dom"; 
import { useContext } from "react";
import { CartContext } from "../utills/Context/CartContext";
import { wishContext } from "../utills/Context/wishContext";
import { MdRemoveShoppingCart } from "react-icons/md";
import { IoHeartDislike } from "react-icons/io5";

export const Services = () => {
  const { cart, remove_from_cart, clear_cart } = useContext(CartContext);
  const { wish, remove_from_wish, clear_wish } = useContext(wishContext);
  const outlet = useOutlet(); // React element

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Services_Sidebar />
      <div className="flex-1 p-4">
        {outlet ? (
          outlet
        ) : (
          <>
          {/* Cart Start */}
          <div>
            {cart.length !== 0 ? (
              <div>
                <div className="flex justify-between">
                  <span className="text-3xl font-semibold text-center mb-6">Cart</span>
                  <button className="bg-red-500 text-white rounded w-30 p-3 mb-5 ms-30" onClick={clear_cart}>Clear Cart</button>
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                  {cart.map((item) => (
                    <div key={item.id} className="border-2 border-gray-600 p-4 rounded-lg cursor-pointer w-72 hover:shadow-xl transition">
                      <Link to={`/products/${item.id}`}>
                        <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover rounded-lg" />
                        <p className="text-gray-600 capitalize text-lg font-bold mt-3">{item.brand}</p>
                        <p className="text-black text-md font-bold tracking-tight mt-1">Price: ₹{item.price}</p>
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-black font-bold text-md">₹{item.price}</p>
                          <p className="text-black font-bold text-md">⭐ {item.rating}</p>
                        </div>
                      </Link>
                      <button className="bg-red-500 text-white rounded w-full p-3 mt-2" onClick={() => remove_from_cart(item)}>Remove</button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <span className="relative top-0 text-2xl font-bold mb-2">Cart</span>
                <MdRemoveShoppingCart size={100} color="gray" />
                <h2 className="text-xl font-semibold text-gray-600 mt-4">No Items in Cart</h2>
              </div>
            )}
          </div>
          {/* Cart End */}

          {/* Wishlist Start */}
          <div className="mt-16">
            {wish.length !== 0 ? (
              <div>
                <div className="flex justify-between">
                  <span className="text-3xl font-semibold text-center mb-6">Wishlist</span>
                  <button className="bg-red-500 text-white rounded w-30 p-3 mb-5 ms-30" onClick={clear_wish}>Clear Wishlist</button>
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                  {wish.map((item) => (
                    <div key={item.id} className="border-2 border-gray-600 p-4 rounded-lg cursor-pointer w-72 hover:shadow-xl transition">
                      <Link to={`/products/${item.id}`}>
                        <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover rounded-lg" />
                        <p className="text-gray-600 capitalize text-lg font-bold mt-3">{item.brand}</p>
                        <p className="text-black text-md font-bold tracking-tight mt-1">Price: ₹{item.price}</p>
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-black font-bold text-md">₹{item.price}</p>
                          <p className="text-black font-bold text-md">⭐ {item.rating}</p>
                        </div>
                      </Link>
                      <button className="bg-red-500 text-white rounded w-full p-3 mt-2" onClick={() => remove_from_wish(item)}>Remove</button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <span className="relative top-0 text-2xl font-bold mb-2">Wishlist</span>
                <IoHeartDislike size={100} color="gray" />
                <h2 className="text-xl font-semibold text-gray-600 mt-4">No Items in Wishlist</h2>
              </div>
            )}
          </div>
          {/* Wishlist End */}
          </>
        )}
      </div>
    </div>
  );
};
