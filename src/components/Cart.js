import React from "react";
import Navber from "./Navber";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Redux/action/cartAction";
import { ImBin } from "react-icons/im";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const removeFromCartHandler = (_id) => {
    dispatch(removeFromCart(_id));
  };
  return (
    <div>
      <div className="container">
        <Navber />
        {cartItems.length === 0 ? (
          <div className="text-center flex flex-col justify-center mt-8">
            <TiShoppingCart className="text-center mx-auto text-7xl block" />
            <p className="text-black text-center">
              Cart is Empty.
              <Link to={"/"}>
                <span className="text-orange-500"> Go Shopping</span>
              </Link>
            </p>
          </div>
        ) : (
          <>
            <div className="hidden md:grid grid-cols-[316px_1fr_1fr_1fr_auto] text-center">
              <h5>item</h5>
              <h5>price</h5>
              <h5>quantity</h5>
              <h5>subtotal</h5>
              <span></span>
            </div>
            <div className="pt-3 grid grid-cols-[auto_1fr_1fr_auto] sm:grid-cols-[329px_1fr_1fr_1fr] md:grid-cols-[329px_1fr_1fr_1fr] gap-4 items-center">
              {cartItems.map((item) => (
                <>
                  <div className="flex flex-wrap items-center gap-2">
                    <img
                      src={`../images/${item.product.img}`}
                      className="object-cover w-32 rounded-md"
                    />
                    <p className="font-bold text-sm md:text-base">
                      {item.product.name}
                    </p>
                  </div>
                  <div className="flex md:justify-center items-center">
                    <p className="font-bold">{item.product.price}</p>
                  </div>
                  <div className="flex md:justify-center items-center">
                    <p className="font-bold">{item.qty}</p>
                  </div>
                  <div className="flex md:justify-center items-center ">
                    <p className="font-bold mr-4">
                      ${Number(item.product.price.replace("$", "")) * item.qty}
                    </p>
                    <div
                      className="bg-orange-600 p-2 rounded-md cursor-pointer"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <ImBin className="text-white" />
                    </div>
                  </div>
                </>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
