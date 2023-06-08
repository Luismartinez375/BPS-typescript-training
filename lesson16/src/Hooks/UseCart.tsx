import { useContext } from "react";
import CartContext from "../Context/CartProvider";
import { UseCartContextType } from "../Context/CartProvider";

const useCart = ():UseCartContextType => {
    return useContext(CartContext)
}

export default useCart