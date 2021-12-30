import React from "react";
import Navber from "./Navber";

export default function Header() {
  return (
    <header
      className="h-screen bg-center bg-cover text-slate-200"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 100%), url("./images/xhero.webp")`,
      }}
    >
      <Navber />
      <div className="flex flex-col pt-32 items-center max-w-md md:w-5/12 mx-auto">
        <p className="uppercase text-center">
          Enjoy Your Healthy Delicious Meal
        </p>
        <h1 className="text-3xl md:text-5xl">Treat Yourself</h1>
        <p className="text-center  px-1  my-8">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <button className="uppercase px-5 py-3 bg-orange-600 text-slate-100 rounded-full">
          explore new
        </button>
      </div>
    </header>
  );
}
