// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Header from './components/Header/Header'
// import Shop from './components/Shop/Shop'
// import {CartProvider} from './components/CartProvider/CartProvider'

// function App() {

//   return (
//    <CartProvider> 
//     <Header></Header>
//     <Shop> </Shop>
//    </CartProvider>
//   )
// }

// export default App


// import React from 'react';
// import './App.css';
// import Header from './components/Header/Header';
// import Shop from './components/Shop/Shop';

// function App() {
//   return (

//       <div>

//           <Header></Header>
//           <Shop> </Shop>
      

//        {/* <Header></Header>
//       <Shop> </Shop> */}
      
//       </div>
//   );
// }

// export default App;



import React, { createContext, useContext, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

export const CartContext = createContext();


function App() {
  const [cart, setCart] = useState([]);
  

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
  <CartContext.Provider value={{test:'test'}}>
      <div className="App">
        <Header />
        <Shop cart />
      </div>
    </CartContext.Provider>
  );
}

export default App;

