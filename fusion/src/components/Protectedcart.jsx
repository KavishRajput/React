import { useContext } from 'react';
import { CartContext } from '../utills/Context/CartContext';
import { Navigate } from 'react-router-dom';

export const Protectedcart = ({ children }) => {
    const { auth } = useContext(CartContext);

    if (auth) {
        return <>{children}</>;
    } else {
        return <Navigate to="/login" />;
    }
};
