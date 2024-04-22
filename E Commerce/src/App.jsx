import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Category from './Components/Categories/Category'
// import data from './product.json'
import CategoryPage from './Components/Categories/CategoryPage';
import Cart from './Components/Cart/Cart'; 

function App() {

  return (
    <>
     {/* <Navbar />
     <Category /> */}
  function App() {

 const [cartItems, setCartItems] = useState([]);

  const addToCart = (productName, price, image) => {
    const newCartItem = { productName, price, image };
    setCartItems([...cartItems, newCartItem]);
  };


  return (
    <Router>
      <div>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/category/:catName" element={<CategoryPage addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}
    </>
  )
}

export default App
