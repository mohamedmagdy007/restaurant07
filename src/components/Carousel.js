import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const dataSlider = [
    {
      id: 1,
      img: "./images/xperson_3.jpg",
      name: "Rob smith",
      job: "Product Designer at Twitter",
      desc: `A small river named Duden flows by their place and supplies it with
      the necessary regelialia. It is a paradisematic country, in which
      roasted parts of sentences fly into your mouth.`,
    },
    {
      id: 2,
      img: "./images/xperson_1.jpg",
      name: "James Woodland",
      job: "CEO, Founder",
      desc: `When she reached the first hills of the Italic Mountains, she had a
      last view back on the skyline of her hometown Bookmarksgrove, the
      headline of Alphabet Village and the subline of her own road, the Line
      Lane. Pityful a rethoric question ran over her cheek, then she
      continued her way.`,
    },
    {
      id: 3,
      img: "./images/xperson_2.jpg",
      name: "John Doe",
      job: "Designer at Facebook",
      desc: `Far far away, behind the word mountains, far from the countries
      Vokalia and Consonantia, there live the blind texts. Separated they
      live in Bookmarksgrove right at the coast of the Semantics, a large
      language ocean.`,
    },
  ];
  return (
    <Slider {...settings}>
      {dataSlider.map((item) => (
        <div key={item.id}>
          <img src={item.img} className="w-24 rounded-full" alt={item.img} />
          <p className="text-orange-600 text-2xl">{item.name}</p>
          <p>{item.job}</p>
          <p className="text-6xl">،،</p>
          <p>“{item.desc}”</p>
        </div>
      ))}
    </Slider>
  );
}
