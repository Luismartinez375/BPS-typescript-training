import { Dispatch } from "react"
import useCart from "../Hooks/UseCart"

type PropsType ={
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Footer = ({viewCart}:PropsType) => {
    const {totalItems, totalPrice} = useCart()
    const year: number = new Date().getFullYear()

    const Pagecontent = viewCart ? <p>Shopping Cart &copy; {year}</p>:
     (<>
        <p>Total Items {totalItems}</p>
        <p>Total Price {totalPrice}</p>
        <p>Shopping Cart &copy; {year}</p>    
        
     </>
     )

     const content = (
        <footer className="footer">
            {Pagecontent}
        </footer>
     )
    return content
}
export default Footer