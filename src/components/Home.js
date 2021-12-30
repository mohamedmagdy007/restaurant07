import React from "react";
import Desserts from "./Desserts";
import Events from "./Events";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Header from "./Header";
import Product from "./Product";

export default function Home() {
  return (
    <div>
      <Header />
      <Product />
      <Desserts />
      <Gallery />
      <Events />
      <Footer />
    </div>
  );
}
