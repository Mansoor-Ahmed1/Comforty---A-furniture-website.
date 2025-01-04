"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { IoCart } from "react-icons/io5";
import FeaturedProductsSpp from "../components/featuredProductsSpp";


const SinglePageProduct = () => {
  return (
    <div>
      <Header />
      <div className="w-3/4 mx-auto flex mt-20">
        <div className="w-1/2">
          <Image
            src="/images/fp2.png"
            width={400}
            height={400}
            alt="Product Image"
          />
        </div>
        <div className="w-1/2">
          <div className="text-[#272343] text-5xl font-bold">
            Library Stool Chair
          </div>
          <div className="text-[#FFFFFF] bg-[#029FAE] mt-10 rounded-xl w-28 text-center h-7">
            $20.00 USD
          </div>
          <div className="text-[#272343] mt-10 border-t-2 border-t-[#D9D9D9] pt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing.
          </div>
          <div>
            <button className="text-[#FFFFFF] text-lg bg-[#029FAE] flex px-5 py-2 rounded-md gap-3 mt-5">
              <div className="my-auto text-2xl">
                <IoCart />
              </div>
              <div>Add to Cart</div>
            </button>
          </div>
        </div>
      </div>

      <div className="w-3/4 mx-auto mt-20 text">
        <div className="flex text-[#000000] justify-between">
            <div className="text-4xl tracking-widest font-semibold">Featured Products</div>
            <div className="border-b-2 border-b-black hover:cursor-pointer">View all</div>
        </div>
        <div className="flex mt-10 gap-5">
        <FeaturedProductsSpp imageSrc="/images/op1.png"/>
        <FeaturedProductsSpp imageSrc="/images/fp1.png"/>
        <FeaturedProductsSpp imageSrc="/images/tc3.png"/>
        <FeaturedProductsSpp imageSrc="/images/fp3.png"/>
        <FeaturedProductsSpp imageSrc="/images/tc1.png"/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SinglePageProduct;
