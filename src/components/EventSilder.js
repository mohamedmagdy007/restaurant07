import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdDone } from "react-icons/md";
export default function EventSilder() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings} className="pt-8">
      <div className="grid-cols-1 md:grid-cols-2 items-center gap-10 Grid-css px-3">
        <div>
          <img
            src="./images/xparty_1.jpg"
            alt="xparty_1"
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-orange-600 text-3xl">$200.99</h2>
          <p className="text-3xl">Birthday Party</p>
          <p className="my-4">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <ul className="list-none">
            <li className="flex gap-2 items-center pb-3">
              <MdDone /> Away behind the word
            </li>
            <li className="flex gap-2 items-center pb-3">
              <MdDone /> Bookmarksgrove right at the coast
            </li>
            <li className="flex gap-2 items-center pb-3">
              <MdDone /> Bookmarksgrove right at the coast
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 Grid-css">
        <div>
          <h2 className="text-orange-600 text-3xl">$200.99</h2>
          <p className="text-3xl">Guest Chef Nihgt Party</p>
          <p className="my-4">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <ul className="list-none ">
            <li className="flex gap-2 items-center pb-3">
              <MdDone /> Away behind the word
            </li>
            <li className="flex gap-2 items-center pb-3">
              <MdDone /> Bookmarksgrove right at the coast
            </li>
            <li className="flex gap-2 items-center pb-3">
              <MdDone /> Bookmarksgrove right at the coast
            </li>
          </ul>
        </div>
        <div>
          <img
            src="./images/xhero_bg_2.jpg"
            alt="xhero_bg"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </Slider>
  );
}
