import React from "react";
import Slide from "react-reveal/Slide";
import { ImSpinner2 } from "react-icons/im";
import { desserts } from "../data";
export default function Desserts() {
  if (desserts) {
    return (
      <div className="bg-[#fee2b3] pb-10">
        <div className="container">
          <div className="text-center">
            <p className="uppercase tracking-[.25em] text-zinc-500">
              choose desserts
            </p>
            <h1 className="text-4xl mb-3">
              Popular <span className="text-orange-600"> Desserts</span>
            </h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-3">
            <Slide bottom>
              {desserts.map((items) => (
                <div className="card-dessert" key={items.id}>
                  <div>
                    <img
                      src={`./images/${items.img}`}
                      alt={items.img}
                      className="w-14"
                    />
                  </div>
                  <div>
                    <h2>{items.name}</h2>
                    <p className="text-orange-600">{items.price}</p>
                  </div>
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <p className="text-center p-10 flex justify-center bg-[#fee2b3]">
        <ImSpinner2 className="animate-spin text-4xl text-center" />
      </p>
    );
  }
}
