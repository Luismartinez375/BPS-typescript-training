import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import { useState } from "react";
import ProductList from "./Components/ProductList";


function App() {
  const [viewCart, setViewCart] = useState(false);
    const pageContent = viewCart ? <Cart /> : <ProductList />;

    const content = (
      <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
      <Footer  viewCart={viewCart} setViewCart={setViewCart}/>
      </>
      )

  return (
    content)
}
export default App;