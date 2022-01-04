import React, { useEffect, useState } from "react";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";
import { foods } from "../data";

export default function Product() {
  const [menuItem, setMenuItem] = useState(foods);
  const Categories = [...new Set(foods.map((item) => item.meal))];
  const [activeTab, setActiveTab] = useState(0);
  const [buttons] = useState(Categories);
  useEffect(() => {
    const filteredData = foods.filter((item) => item.meal === "Breackfast");
    setMenuItem(filteredData);
  }, []);

  const filter = (button, idx) => {
    const filtered = foods.filter((item) => item.meal === button);
    setMenuItem(filtered);
    setActiveTab(idx);
  };
  if (menuItem) {
    return (
      <div className="bg-[#fee2b3] pb-10">
        <div className="container ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center pt-12">
            <div className="pl-12">
              <p className="uppercase text-zinc-500 tracking-widest">
                Select Your MeaL
              </p>
              <h1 className="text-5xl mb-3">
                Popular <span className="text-orange-600"> Foods</span>
              </h1>
              <div className="flex flex-col items-start pb-3">
                {buttons?.map((tab, idx) => (
                  <div key={idx}>
                    <button
                      className={`cursor-pointer font-bold mt-4 py-3 px-6 ${
                        idx === activeTab ? "active" : ""
                      }`}
                      onClick={() => filter(tab, idx)}
                    >
                      <img
                        src={`./images/${idx + 1}.png`}
                        width={24}
                        height={20}
                        alt={`./images/${idx + 1}.png`}
                        className="inline-block"
                      />{" "}
                      {tab}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-3 col-span-2">
              {menuItem?.map((item) => (
                <div key={item.id}>
                  <Slide bottom>
                    <Link to={`./food/${item.id}`}>
                      <div className="overflow-hidden rounded-md">
                        <img
                          className="img-foods"
                          src={`./images/${item.img}`}
                          alt={`./images/${item.img}`}
                        />
                      </div>
                    </Link>
                  </Slide>
                  <p className="my-2 text-xl">{item.name}</p>
                  <p className="text-orange-600">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    <p className="text-center p-10 flex justify-center bg-[#fee2b3]">
      <ImSpinner2 className="animate-spin text-4xl text-center" />
    </p>;
  }
}
