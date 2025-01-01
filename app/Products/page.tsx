"use client";

import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SaleProducts from "../components/saleProducts";
import NewProducts from "../components/newProducts";
import FeaturedProducts from "../components/featuredProducts";
import NewProductsbt from "../components/newProductsbt";

const ProductPage = () => {
  return (
    <div>
      <Header />
      <div className="w-3/4 mx-auto mt-24">
        <div className="text-3xl text-[#272343]">All Products</div>
        <div className="grid grid-cols-4 py-10 gap-y-16 gap-x-5">
          <NewProducts imageSrc="/images/fp1.png" />
          <SaleProducts imageSrc="/images/fp2.png" />
          <FeaturedProducts imageSrc="/images/fp3.png" />
          <FeaturedProducts imageSrc="/images/fp4.png" />
          <NewProductsbt imageSrc="/images/tc2.png" />
          <SaleProducts imageSrc="/images/enaps1.jpg" />
          <FeaturedProducts imageSrc="/images/op1.png" />
          <FeaturedProducts imageSrc="/images/fp1.png" />
          <NewProductsbt imageSrc="/images/tc1.png" />
          <SaleProducts imageSrc="/images/fp2.png" />
          <FeaturedProducts imageSrc="/images/fp3.png" />
          <FeaturedProducts imageSrc="/images/tc3.png" />
        </div>
      </div>
      <div className="bg-[#1E28320D] h-full pb-24 text-[#000000]">
        <div className="text-4xl font-semibold text-center pt-16">
          Or subscribe to the newsletter
        </div>
        <div className="flex justify-center pt-16 gap-5">
          <input
            type="email"
            placeholder=" Email Address...."
            className="bg-[#1E28320D] border-b-2 border-[#000000] w-4/6"
          />
          <button className="border-b-2 border-[#1E2832] px-1">Submit</button>
        </div>
        <div className="text-4xl font-semibold text-center pt-16">
          Follow products and discounts on Instagram
        </div>
        <div className="flex gap-5 px-20 pt-20 justify-center">
          <div>
            {" "}
            <Image
              src={"/images/tc2.png"}
              width={140}
              height={140}
              alt="Product Image"
            />
          </div>
          <div>
            <Image
              src={"/images/tc1.png"}
              width={140}
              height={140}
              alt="Product Image"
            />
          </div>
          <div>
            <Image
              src={"/images/fp2.png"}
              width={140}
              height={140}
              alt="Product Image"
            />
          </div>
          <div>
            <Image
              src={"/images/fp1.png"}
              width={140}
              height={140}
              alt="Product Image"
            />
          </div>
          <div>
            <Image
              src={"/images/fp3.png"}
              width={140}
              height={140}
              alt="Product Image"
            />
          </div>
          <div>
            <Image
              src={"/images/tc3.png"}
              width={140}
              height={140}
              alt="Product Image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
