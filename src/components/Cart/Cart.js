import React from "react";
import { useCartContex } from "../../context/CartContext";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cartList, totalPrice, removeProduct, cleanCart } = useCartContex();
  console.log(cartList);
  const renderProduct = () =>
    cartList.map((prod) => (
      <div key={prod.id} className="flex justify-between items-center pb-6">
        <div className="flex flex-row items-center ml-3">
          <img className="w-1/4" src={prod.image} alt="" />
          <span className="text-3l font-bold pl-6">{prod.product}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="pr-8 flex ">
            <span>{prod.quantity}</span>
          </div>
          <div className="pr-8 ">
            <span className="text-3l font-bold">$USD{prod.price}</span>
          </div>
          <div>
            <i
              className="fa fa-close text-3l font-bold"
              onClick={() => removeProduct(prod.id)}
            >
              x
            </i>
          </div>
        </div>
      </div>
    ));
  return (
    <>
      <div className="h-screen bg-gray-300">
        <div className="py-12">
          <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
            <div className="md:flex ">
              <div className="w-full p-4 px-5 py-5">
                <div className=" ">
                  <div className="col-span-2 p-5">
                    <h1 className="text-3xl font-bold ">Shopping Cart</h1>

                    <div className="flex-col justify-between items-center mt-6 pt-6 ">
                      {cartList.length > 0 ? (
                        renderProduct()
                      ) : (
                        <p>No hay productos </p>
                      )}
                    </div>
                    <div className="flex justify-between items-center mt-6 pt-6 border-t">
                      <div className="flex items-center">
                        <i className="fa fa-arrow-left text-sm pr-2"></i>
                        <span
                          className="text-md  font-medium text-blue-500"
                          onClick={cleanCart}
                        >
                          Vaciar el carrito
                        </span>
                      </div>

                      <div className="flex-col justify-evenly items-center	">
                        <div className="pb-3 text-center">
                        <span className="text-lg font-medium text-gray-400 mr-1">
                          Subtotal:
                        </span>
                        <span className="text-lg font-bold text-gray-800 ">
                          ${totalPrice}
                        </span>
                        </div>
                        <NavLink to= "/form" className=" w-80 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "><span>finalizar compra</span></NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
