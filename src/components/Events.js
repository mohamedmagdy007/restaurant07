import React from "react";
import EventSilder from "./EventSilder";

export default function Events() {
  return (
    <div className="bg-[#fee2b3] pb-10">
      <div className="container pt-10">
        <div className="text-center w-3/4 md:w-3/6  mx-auto">
          <p className="uppercase text-zinc-800 tracking-[.25em]">events</p>
          <h1 className="text-4xl mb-3 text-zinc-800">
            Enjoy <span className="text-orange-600"> Our Events</span>
          </h1>
          <p className="">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <EventSilder />
      </div>
    </div>
  );
}
