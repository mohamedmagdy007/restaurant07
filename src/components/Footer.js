import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="bg-zinc-700 py-10">
      <div className="container">
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center ">
          <div className=" text-white">
            <p className="font-bold">
              About Meal<span className="text-orange-600">.</span>
            </p>
            <p className="my-4">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <p className="mb-4">Content</p>
            <ul className="flex gap-2">
              <li className="p-2 bg-neutral-50 rounded-full transition-all hover:bg-orange-600">
                <AiOutlineInstagram className="text-slate-900" />
              </li>
              <li className="p-2 bg-neutral-50 rounded-full transition-all hover:bg-orange-600">
                <AiOutlineTwitter className="text-slate-900" />
              </li>
              <li className="p-2 bg-neutral-50 rounded-full transition-all hover:bg-orange-600">
                <FaFacebookF className="text-slate-900" />
              </li>
              <li className="p-2 bg-neutral-50 rounded-full transition-all hover:bg-orange-600">
                <FaLinkedinIn className="text-slate-900" />
              </li>
            </ul>
          </div>
          <div className="text-gray-500">
            <h2 className=" text-white font-bold">Projects</h2>
            <ul className="my-4">
              <li className="cursor-pointer transition-all hover:text-white">
                Html
              </li>
              <li className="py-2 cursor-pointer transition-all hover:text-white">
                Css
              </li>
              <li className="cursor-pointer transition-all hover:text-white">
                React
              </li>
              <li className="py-2 cursor-pointer transition-all hover:text-white">
                Tailwind CSS
              </li>
            </ul>
          </div>
          <div className="text-gray-500">
            <h2 className="text-white font-bold">Servies</h2>
            <ul className="my-4">
              <li className="cursor-pointer transition-all hover:text-white">
                Html
              </li>
              <li className="py-2 cursor-pointer transition-all hover:text-white">
                Css
              </li>
              <li className="cursor-pointer transition-all hover:text-white">
                React
              </li>
              <li className="py-2 cursor-pointer transition-all hover:text-white">
                Tailwind CSS
              </li>
            </ul>
          </div>
          <div className="text-gray-500">
            <h2 className="text-white font-bold">Contact</h2>
            <ul className="my-4">
              <li className="cursor-pointer transition-all hover:text-white">
                +1(123)-456-7890
              </li>
              {/* <li className="py-2 cursor-pointer transition-all hover:text-white ">
                Css
              </li> */}
              <li className="py-2 cursor-pointer transition-all hover:text-white">
                +1(123)-456-7890
              </li>
              <li className=" cursor-pointer transition-all hover:text-white">
                info@mydomain.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
