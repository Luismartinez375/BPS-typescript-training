import { useContext } from "react";
import ProductsContext from "../Context/ProductsProvider";
import { UseProductsContextType } from "../Context/ProductsProvider";

const useProducts = ():UseProductsContextType => {
    return useContext(ProductsContext)
}

export default useProducts