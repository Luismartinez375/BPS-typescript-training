import Nav from "./Nav"
import useCart from "../Hooks/UseCart"

type PropsType ={
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>,
}



const Header = ({viewCart, setViewCart}: PropsType) => {
    const {totalItems, totalPrice} = useCart()
    const content = (
        <header className="header">
            <div className="header__title-bar">
                <h1 >Acme.co</h1>
                <div className="header__price-box"></div>
                <p>Total Items:{totalItems}</p>
                <p>Total price:{totalPrice}</p>
            </div>
            <Nav viewCart={viewCart} setViewCart={setViewCart}/>
        </header>
    )
    return content
}
export default Header