"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TextFields from "../components/text-fields_about-us";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { HiOutlineTrophy } from "react-icons/hi2";
import { SiTicktick } from "react-icons/si";
import { MdOutlineSupportAgent } from "react-icons/md";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <div className="w-3/4 mx-auto">
        <div className="text-[#000000] font-bold text-3xl mt-16 text-center">
          Get In Touch With Us
        </div>
        <div className="flex justify-center">
          <div className="text-[#9F9F9F] w-2/3 text-center mt-5">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </div>
        </div>
        <div className="flex mt-20">
          <div className="w-1/2 text-[#000000]">
            <div className="flex gap-3">
              <div className="text-4xl my-auto">
                <FaLocationDot />
              </div>
              <div>
                <div className="font-semibold text-xl">Address</div>
                <div className="w-2/3">
                  236 5th SE Avenue, New York NY10000, United States
                </div>
              </div>
            </div>
            <div className="flex mt-20 gap-3">
              <div className="text-4xl my-auto">
                <FaPhoneAlt />
              </div>
              <div>
                <div className="font-semibold text-xl">Phone</div>
                <div>Mobile: +(84) 546-6789</div>
                <div>Hotline: +(84) 456-6789</div>
              </div>
            </div>
            <div className="flex mt-20 gap-3">
              <div className="text-4xl my-auto">
                <FaClock />
              </div>
              <div>
                <div className="font-semibold text-xl">Working Time</div>
                <div>Monday-Friday: 9:00 - 22:00 </div>
                <div>Saturday-Sunday: 9:00 - 21:00</div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <TextFields title="Your name" placeholder="Abc" />
            <TextFields title="Email address" placeholder="Abc@def.com" />
            <TextFields title="Subject" placeholder="This is optional" />
            <TextFields
              title="Message"
              placeholder="Hi! i'd like to ask about"
              paddingBottom={40}
            />
            <button className="bg-[#029FAE] border-2 border-[#B88E2F] py-5 w-3/4 rounded-lg">
              Submit
            </button>6
          </div>
        </div>
      </div>
      <div className="text-[#242424] w-3/4 mx-auto flex bg-[#F4F4F4] justify-between px-16 py-24 mt-20">
        <div className="flex gap-2">
          <div className="text-4xl my-auto">
            <HiOutlineTrophy />
          </div>
          <div>
            <div className="font-semibold text-xl">High Quality</div>
            <div className="text-[#898989]">Crafted from top materials</div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="text-4xl my-auto">
            <SiTicktick />
          </div>
          <div>
            <div className="font-semibold text-xl">High Quality</div>
            <div className="text-[#898989]">Crafted from top materials</div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="text-4xl my-auto">
            <MdOutlineSupportAgent />
          </div>
          <div>
            <div className="font-semibold text-xl">High Quality</div>
            <div className="text-[#898989]">Crafted from top materials</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
