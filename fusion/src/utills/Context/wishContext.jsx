import { useState, createContext } from "react";
import toast from "react-hot-toast";

// Create context
export const wishContext = createContext();

// WishProvider component
export const WishProvider = ({ children }) => {
  const [wish, setWish] = useState([]);

  // Add to wishlist
  const add_to_wish = (item) => {
    const exists = wish.find((v) => v.id === item.id);
    if (exists) {
      toast.error('Product Already Exists in Wishlist!');
      return;
    }
    setWish([...wish, { ...item }]);
    toast.success('Successfully added to Wishlist!');
  };

  // Remove one item from wishlist
  const remove_from_wish = (prod) => {
    setWish(wish.filter((product) => product.id !== prod.id));
  };

  // Clear entire wishlist
  const clear_wish = () => {
    setWish([]);
    toast.success('Wishlist Cleared');
  };

  return (
    <wishContext.Provider value={{ wish, add_to_wish, remove_from_wish, clear_wish }}>
      {children}
    </wishContext.Provider>
  );
};

export default WishProvider;
