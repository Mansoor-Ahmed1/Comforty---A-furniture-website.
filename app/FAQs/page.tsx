"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Faqs from "../components/faqs";

const FAQs = () => {
  return (
    <div>
      <Header />
      <div className="w-3/4 mx-auto mt-20">
        <div className="text-[#333333] font-bold text-3xl text-center pb-5">
          Questions Looks Here
        </div>
        <div className="text-[#4F4F4F] text-center pb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </div>
        <div className="grid grid-cols-2 gap-10 mt-10">
          <Faqs
            question="What types of chairs do you offer?"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
          />
          <Faqs
            question="How can we get in touch with you?"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
          />
          <Faqs
            question="Do your chairs come with a warranty?"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
          />
          <Faqs
            question="What will be delivered? And When?"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
          />
          <Faqs
            question="Can I try a chair before purchasing?"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
          />
          <Faqs
            question="How do I clean and maintain my Comforty chair?"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQs;
