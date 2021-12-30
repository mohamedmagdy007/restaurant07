import React from "react";
import Carousel from "./Carousel";

export default function Gallery() {
  return (
    <div
      className="overlay"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #f5c97ee6,#f5c97ee6),url(./images/xhero_bg_2.jpg)",
      }}
    >
      <div className="container pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-10">
          <div className="pb-5">
            <p className="text-zinc-500">TESTIMONIALS</p>
            <h1 className="text-4xl mb-3">
              Satisfied <span className="text-orange-600"> Customers</span>
            </h1>
            <Carousel />
          </div>
          <div>
            <p className="text-zinc-500">GALLERIES</p>
            <h1 className="text-4xl mb-3 text-zinc-800">
              Photo <span className="text-orange-600"> Galleries</span>
            </h1>
            <div className="grid grid-cols-2 grid-rows-2 gap-8 pt-5">
              <div className="overflow-hidden rounded-md">
                <img
                  className="img-foods"
                  src={`./images/ximg_3_b.jpg`}
                  alt={`./images/ximg_1.jpg`}
                />
              </div>
              <div className="overflow-hidden rounded-md">
                <img
                  className="img-foods"
                  src={`./images/ximg_2_b.jpg`}
                  alt={`./images/ximg_1.jpg`}
                />
              </div>
              <div className="overflow-hidden rounded-md">
                <img
                  className="img-foods"
                  src={`./images/ximg_1.jpg`}
                  alt={`./images/ximg_1.jpg`}
                />
              </div>
              <div className="overflow-hidden rounded-md">
                <img
                  className="img-foods"
                  src={`./images/ximg_4_b.jpg`}
                  alt={`./images/ximg_4_b.jpg`}
                />
              </div>
              <button className="p-3 rounded-full font-bold text-slate-200 bg-orange-600 w-52">
                More Galleries
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
