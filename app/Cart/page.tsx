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
        <div className="text-2xl text-[#111111] font-semibold">Bag</div>
        <div className="flex">
          <div className="w-11/12">
            <CartItem src="/images/fp3.png" />
            <CartItem src="/images/tc1.png" />
          </div>
          <div className="text-[#111111]">
            <div className="text-2xl font-semibold">Summary</div>
            <div className="flex justify-between pt-7">
              <div>Subtotal</div>
              <div>$198.00</div>
            </div>
            <div className="flex justify-between pt-7">
              <div>Estimated Delivery & Handling</div>
              <div>Free</div>
            </div>
            <div className="flex justify-between py-2 my-5 border-y-2 border-[#E5E5E5]">
              <div>Total</div>
              <div>$198.00</div>
            </div>
            <div><button className="bg-[#029FAE] rounded-3xl py-4 text-[#FFFFFF] w-[100%]">Member Checkout</button></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
