import { useContext} from "react"
import { wishContext } from "../utills/Context/wishContext"
import { IoHeartDislike } from "react-icons/io5";
export const Wishlist=()=>{
    const { wish, remove_from_wish, clear_wish} = useContext(wishContext);
      return (
        <>
        <div className="fixed right-4 top-20 bg-gray-100 p-6 sm:p-8 w-11/12 sm:w-2/3 md:w-1/3 h-auto max-h-150 flex flex-col overflow-y-auto rounded-2xl shadow-2xl transition-all duration-300 z-50">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-serif">Wish</h2>
            {wish.length !== 0 && (<button onClick={clear_wish} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm cursor-pointer ml-auto">Clear Cart</button>)}
          </div>
    
          {wish.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-1">
              <IoHeartDislike size={200} color="gray" />
              <h3 className="text-lg md:text-2xl font-semibold text-gray-700 mt-4">Your Cart is Empty</h3>
              <p className="text-gray-500 text-sm mt-2">Looks like you haven't added anything yet!</p>
            </div>
          ) : (
            wish.map((item) => (
              <div key={item.id} className="flex flex-wrap gap-4 justify-between items-center mb-6 border-b border-gray-400 pb-4">
                <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover rounded-lg" />
                <span className="text-lg md:text-xl font-medium flex-1">{item.title}</span>
                <span className="text-lg md:text-xl font-semibold text-green-700">₹{item.price}</span>
                <div className="flex items-center gap-2">
                  <button className="bg-gray-900 text-white px-3 py-1 rounded hover:bg-gray-700" onClick={()=>{inc_quantity(item)}}>+</button>
                  <span className="text-lg">{item.qty}</span>
                  <button className="bg-gray-900 text-white px-3 py-1 rounded hover:bg-gray-700" onClick={()=>{dec_quantity(item)}}>-</button>
                </div>
                <IoHeartDislike size={28} className="text-red-500 cursor-pointer hover:scale-125 transition-transform" onClick={() => remove_from_wish(item)}/>
              </div>
            ))
          )}
        </div>

        </>
    )
}