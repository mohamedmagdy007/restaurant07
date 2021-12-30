import React, { useState, useEffect } from "react";
import { addToCart } from "../Redux/action/cartAction";
import { ImSpinner2 } from "react-icons/im";
import Navber from "./Navber";
import GalleryImages from "./galleryImages";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { foods } from "../data";
export default function FoodsDetails(props) {
  const id = parseInt(props.match.params.id);
  const [food, setFood] = useState();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  useEffect(async () => {
    const filteredData = foods.filter((item) => item.id == id);
    setFood(filteredData);
  }, [setFood]);
  const image = [
    "ximg_2_n.jpg",
    "ximg_3_b.jpg",
    "ximg_2_d.jpg",
    "ximg_4_b.jpg",
  ];
  const handleQty = (type) => {
    if (type === "dec") {
      qty > 1 && setQty(qty - 1);
    } else {
      setQty(qty + 1);
    }
  };
  if (food) {
    return (
      <div className="">
        <div className="container">
          <Navber />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center py-5">
            <div>
              <GalleryImages images={[food[0].img, ...new Set(image)]} />
            </div>
            <div>
              <h2 className="text-orange-600 font-bold text-3xl">
                {food[0].name}
              </h2>
              <p className="text-3xl text-orange-700 font-bold mt-4">
                {food[0].price}
              </p>
              <p className="my-8">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <div className="line"></div>
              <div className="flex items-center gap-5 my-3">
                <button
                  className="font-bold text-3xl border-2 rounded-md px-3"
                  onClick={() => handleQty("dec")}
                >
                  -
                </button>
                <p className="text-4xl">{qty}</p>
                <button
                  className="font-bold text-3xl border-2 rounded-md px-2 "
                  onClick={() => handleQty("inc")}
                >
                  +
                </button>
              </div>
              <Link
                to="/cart"
                className="bg-orange-600 text-white hover:text-slate-200 p-2 rounded-md"
                onClick={() => dispatch(addToCart(food[0], qty))}
              >
                ADD TO CART
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <p className="text-center mt-10 flex justify-center">
        <ImSpinner2 className="animate-spin text-4xl text-center" />
      </p>
    );
  }
}
