"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { FaShippingFast } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { CiCreditCard1 } from "react-icons/ci";
import { PiPlantThin } from "react-icons/pi";

const AboutUsPage = () => {
  return (
    <div>
      <Header />
      <div className="w-3/4 mx-auto ">
        <div className="flex mt-20 gap-x-4">
          <div className="w-1/2 bg-[#007580]">
            <div className="font-bold text-2xl pl-6 pt-16">
              About Us - Comforty
            </div>
            <div className="px-6">
              At Comforty, we believe that the right chair can transform your
              space and elevate your comfort. Specializing in ergonomic design,
              premium materials, and modern aesthetics, we craft chairs that
              seamlessly blend style with functionality.{" "}
            </div>
            <button className="bg-[#f9f9f926] p-4 mt-24 ml-10">
              View collection
            </button>
          </div>
          <div className="w-1/2">
            <Image
              src="/images/fp1.png"
              width={400}
              height={300}
              alt="Product Image"
            ></Image>
          </div>
        </div>
        <div>
          <div className="font-bold text-3xl text-[#272343] mt-20 text-center">
            What makes our Brand Different
          </div>
          <div className="text-[#007580] grid grid-cols-4 gap-x-3 mt-10">
            <div className="bg-[#F9F9F9] p-4">
              <div className="text-3xl">
                <FaShippingFast />
              </div>
              <div className="text-xl">Next day as standard</div>
              <div>
                Order before 3pm and get your order the next day as standard
              </div>
            </div>
            <div className="bg-[#F9F9F9] p-4">
              <div className="text-3xl">
                <GoVerified />
              </div>
              <div className="text-xl">Next day as standard</div>
              <div>
                Order before 3pm and get your order the next day as standard
              </div>
            </div>
            <div className="bg-[#F9F9F9] p-4">
              <div className="text-3xl">
                <CiCreditCard1 />
              </div>
              <div className="text-xl">Next day as standard</div>
              <div>
                Order before 3pm and get your order the next day as standard
              </div>
            </div>
            <div className="bg-[#F9F9F9] p-4">
              <div className="text-3xl">
                <PiPlantThin />
              </div>
              <div className="text-xl">Next day as standard</div>
              <div>
                Order before 3pm and get your order the next day as standard
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-[#272343] font-semibold text-2xl my-20">
            Our Popular Products{" "}
          </div>
          <div className="grid grid-cols-4 gap-5">
            <div className="col-span-2">
              <Image
                src="/images/opp1.png"
                width={474}
                height={100}
                alt="Product Image"
              />
              <div className="text-[#2A254B]">
                <div className="pt-1">The Poplar suede sofa</div>
                <div>$99.00</div>
              </div>
            </div>

            <div className="">
              <Image
                src="/images/opp2.png"
                width={230}
                height={100}
                alt="Product Image"
              />{" "}
              <div className="text-[#2A254B]">
                <div className="pt-1">The Dandy chair</div>
                <div>$99.00</div>
              </div>
            </div>
            <div>
              <Image
                src="/images/opp3.png"
                width={230}
                height={100}
                alt="Product Image"
              />{" "}
              <div className="text-[#2A254B]">
                <div className="pt-1">The Dandy chair</div>
                <div>$99.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
