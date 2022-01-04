import React from "react";
import Footer from "./Footer";
import Navber from "./Navber";

export default function About() {
  return (
    <div>
      <div className="container">
        <Navber />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-4 items-center">
          <div>
            <img
              src="./images/xparty_1.jpg"
              className="object-cover w-full rounded-md"
              alt="party"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Our Story</h1>
            <div className="w-24 bg-orange-600 h-1 my-1"></div>
            <p className="leading-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              accusantium sapiente tempora sed dolore esse deserunt eaque
              excepturi, delectus error accusamus vel eligendi, omnis beatae.
              Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
              dolore, obcaecati incidunt sequi blanditiis est exercitationem
              molestiae delectus saepe odio eligendi modi porro eaque in libero
              minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
              ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
              similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
              iste.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
