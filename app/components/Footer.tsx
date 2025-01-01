import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import ChairRoundedIcon from "@mui/icons-material/ChairRounded";
import { RiMastercardFill } from "react-icons/ri";
import { SiVisa } from "react-icons/si";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcPaypal } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="border-y-2 border-[#E1E3E5] mt-28 pb-10">
        <div className="text-[#272343] w-3/4 mx-auto flex">
          <div className="w-1/3 pt-16">
            <div className="flex my-auto">
              <ChairRoundedIcon
                className="my-auto text-[#029FAE]"
                fontSize="large"
              />
              <div className="my-auto text-2xl p-2">Comforty</div>
            </div>
            <div className="my-4 pr-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              eveniet odit, optio rem.
            </div>
            <div className="flex gap-5">
              <div className="hover:text-[#007580] hover:cursor-pointer">
                <FacebookRoundedIcon />
              </div>
              <div className="hover:text-[#007580] hover:cursor-pointer">
                <TwitterIcon />
              </div>
              <div className="hover:text-[#007580] hover:cursor-pointer">
                <InstagramIcon />
              </div>
              <div className="hover:text-[#007580] hover:cursor-pointer">
                <PinterestIcon />
              </div>
              <div className="hover:text-[#007580] hover:cursor-pointer">
                <YouTubeIcon />
              </div>
            </div>
          </div>
          <div className="w-1/3 flex gap-10 pt-16 ">
            <div>
              <div className="text-[#9A9CAA] text-xl">Category</div>
              <div className="pt-3">
                <div className="hover:underline hover:text-[#007580] hover:cursor-pointer">
                  Sofa
                </div>
                <div className="hover:underline hover:text-[#007580] hover:cursor-pointer pt-2">
                  Armchair
                </div>
                <div className="hover:underline hover:text-[#007580] hover:cursor-pointer pt-2">
                  Wing Chair
                </div>
                <div className="hover:underline hover:text-[#007580] hover:cursor-pointer pt-2">
                  Desk Chair
                </div>
                <div className="hover:underline hover:text-[#007580] hover:cursor-pointer pt-2">
                  Wooden Chair
                </div>
                <div className="hover:underline hover:text-[#007580] hover:cursor-pointer pt-2">
                  Park Bench
                </div>
              </div>
            </div>
            <div>
              <div className="text-[#9A9CAA] text-xl">Support</div>
              <div className="pt-3">
                <div className="hover:underline hover:text-[#007580] hover:cursor-pointer">
                  Help & Support
                </div>
                <div className="hover:underline hover:text-[#007580] hover:cursor-pointer pt-2">
                  Terms & Conditions
                </div>
                <div className="hover:underline hover:text-[#007580] hover:cursor-pointer pt-2">
                  Privacy Policy
                </div>
                <div className="hover:underline hover:text-[#007580] hover:cursor-pointer pt-2">
                  Help
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 pt-16">
            <div className="text-[#9A9CAA] tracking-widest">NEWSLETTER</div>
            <div className="flex pt-6 gap-3">
              <div>
                <input
                  type="email"
                  placeholder=" Your email"
                  className="w-64 border-2 rounded-md h-8"
                />
              </div>
              <div>
                <button className="bg-[#029FAE] text-[#FFFFFF] px-6 h-8 rounded-md">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="text-[#272343]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              possimus ex autem libero exercitationem.
            </div>
          </div>
        </div>
      </div>

      <div className="w-3/4 mx-auto flex justify-between h-16 items-center">
        <div className="flex gap-1">
          <div className="text-[#9A9CAA]">
            @ 2024 - Blogy - Designed & Develop by
          </div>
          <div className="text-[#272343]">
            <a href="https://github.com/Mansoor-Ahmed1" target="_blank ">
              {" "}
              Mansoor Ahmed{" "}
            </a>
          </div>
        </div>
        <div className="text-[#9A9CAA] flex gap-3 text-3xl">
          <div>
            <RiMastercardFill />
          </div>
          <div>
            <FaCcPaypal />
          </div>
          <div>
            <SiAmericanexpress />
          </div>
          <div>
            <SiVisa />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
