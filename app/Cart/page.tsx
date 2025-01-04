"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartItem from "../components/cartItems";

const Cart = () => {
  return (
    <div>
      <Header />
      <div className="w-3/4 mx-auto mt-16">
        <div className="text-2xl text-[#111111] font-semibold">
          Bag
        </div>
        <CartItem src="/images/fp3.png"/>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
