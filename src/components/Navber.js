import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Navber() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const [isActive, setActive] = useState(false);
  const navbar = () => {
    setActive(!isActive);
  };
  return (
    <div>
      <nav
        className={`container md:flex md:items-center md:justify-between pt-3 shadow-sm`}
      >
        <div className="flex justify-between items-center">
          <h2 className="uppercase p-2 text-2xl">
            <Link to={"/"}>
              Meal<span className="text-orange-700">.</span>
            </Link>
          </h2>
          <ul
            className={`block md:hidden toggle ${isActive ? "active" : ""} `}
            onClick={navbar}
          >
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <ul className={`navbar ${isActive ? "close md:flex" : ""}`}>
          <li className="itemNavbar">
            {" "}
            <Link to={"/"}>Home</Link>
          </li>
          <li className="itemNavbar">
            <Link to={"/cart"} className="flex">
              Cart
              <div className="relative flex items-center">
                {cartItems.length > 0 && (
                  <span className="absolute bg-orange-800 text-white rounded-full top-[-13px] right-[-16px] w-5 h-5 leading-[1.2] text-center">
                    {cartItems.length}
                  </span>
                )}
                <FaShoppingCart className="text-2xl inline-block" />
              </div>
            </Link>
          </li>

          <li className="itemNavbar">
            <Link to="/about">About</Link>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
}
