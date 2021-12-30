import React, { useState } from "react";

export default function GalleryImages({ images }) {
  const [main, setMain] = useState(images[0]);
  return (
    <div>
      <img
        className="object-cover w-full rounded-md"
        src={`../images/${main}`}
        alt="food"
      />
      <div className="mt-4 grid grid-cols-5 gap-4">
        {images.map((item, index) => (
          <img
            className={`rounded-md cursor-pointer ${
              item === main ? "border-2 border-orange-900" : "null"
            }`}
            src={`../images/${item}`}
            alt={item}
            onClick={() => setMain(images[index])}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
