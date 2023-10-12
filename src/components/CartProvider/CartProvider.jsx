// // import React, { createContext, useContext, useState } from 'react';

// // const CartContext= createContext();

// // const CartProvider = ({children}) => {

// //     const [cart, setCart]= useState([])

// //     const handleAddToCart= (product)=>{
// //         const newcart= [...cart, product]
// //         setCart(newcart);
// //     }
// //     return (
// //         <div>

// // <CartContext.Provider value={{cart, handleAddToCart}}> 
// //             {children}
// //         </CartContext.Provider>
    
            
            
// //         </div>
// //     );
// // };

// // function useCart() {
// //     return useContext(CartContext);
// // }

// // export  {CartProvider, useCart};

// import React, { createContext, useContext, useState } from 'react';

// export const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cart, setCart] = useState([]);

// //   const handleAddToCart = (product) => {
// //     const newCart = [...cart, product];
// //     setCart(newCart);
// //   };

//   return (
//     <CartContext.Provider value={[cart, setCart]}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// //  export function useCart() {
// //   return useContext(CartContext);
// // }

