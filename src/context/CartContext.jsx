import { useContext } from "react";
import { createContext, useState } from "react";

const CartContext = createContext([]);
export const useCartContex = () => useContext(CartContext);

export function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  const isInCart = (id) => cartList.find((prod) => prod.id === id);

  const addCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cartList.map((prod) => {
        if (prod.id === item.id) {
          const newQuantity = prod.quantity + quantity;
          return { ...prod, quantity: newQuantity };
        } else {
          return prod;
        }
      });
      setCartList(newCart);
    } else {
      const newProduct = { ...item, quantity: quantity };
      setCartList([...cartList, newProduct]);
    }
  };
  const removeProduct = (id) =>
    setCartList(cartList.filter((prod) => prod.id !== id));

  const cleanCart = () => setCartList([]);

  const totalPrice = cartList.reduce(
      (acc, product) => (acc += product.price * product.quantity),
      0
    );
  

  const totalQuantity = () => {
    return cartList.reduce((_acc, product) => (_acc += product.quantity), 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCart,
        removeProduct,
        cleanCart,
        totalPrice,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
