import React from "react";
import ChairRoundedIcon from "@mui/icons-material/ChairRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DoneIcon from "@mui/icons-material/Done";
import Link from "next/link";
const Header = () => {
  return (
    <div>
      {" "}
      <nav className="bg-[#272343] size-full h-11 flex p-2 pl-24">
        <div className="flex">
          <DoneIcon />
          <div> Free Shipping on All Orders over $50 </div>
        </div>
        <div className="flex gap-5 pr-24 ml-auto">
          <div className="flex">
            <div>Eng</div>
            <ExpandMoreIcon className="my-auto hover:cursor-pointer" />
          </div>
          <div className="hover:cursor-pointer">
            {" "}
            <Link href="/FAQs"> Faqs</Link>
          </div>
          <Link href="/Contact-us">
            <div className="flex">
              <HelpOutlineOutlinedIcon
                fontSize="small"
                className="my-auto hover:cursor-pointer"
              />
              <div>Need Help</div>
            </div>
          </Link>
        </div>
      </nav>
      <nav className="bg-[#F0F2F3] flex h-14 text-[#272343] justify-between items-center px-24 ">
        <Link href="/">
          <div className="flex my-auto hover:cursor-pointer">
            <ChairRoundedIcon
              className="my-auto text-[#029FAE]"
              fontSize="large"
            />
            <div className="my-auto text-2xl p-2"> Comforty</div>
          </div>
        </Link>
        <Link href="/Cart">
          <div className="bg-[#FFFFFF] py-1 px-2 flex gap-1 items-center rounded-lg hover:cursor-pointer">
            <ShoppingCartOutlinedIcon fontSize="inherit" className="my-auto" />
            <div>Cart</div>
            <div className="bg-[#007580] w-5 h-5 rounded-full mx-1 flex items-center justify-center text-white font-bold text-[10px]">
              2
            </div>
          </div>
        </Link>
      </nav>
      <nav className="bg-[FFFFFF] text-[#636270] flex justify-between px-24 py-5 border-b-2 border-b-[##F0F2F3]">
        <div className="flex gap-8">
          <div className="text-[#029FAE] cursor-pointer">
            {" "}
            <Link href="/">Home</Link>
          </div>
          <div className="hover:text-[#029FAE] cursor-pointer">
            <Link href="/Shop">Shop</Link>
          </div>
          <div className="hover:text-[#029FAE] cursor-pointer">
            {" "}
            <Link href="/Products">Product</Link>
          </div>
          <div className="hover:text-[#029FAE] cursor-pointer">Pages</div>
          <div className="hover:text-[#029FAE] cursor-pointer">
            <Link href='/About-us'>
            About
            </Link>
            </div>
        </div>
        <div className="flex gap-3">
          <div>Contact: </div>
          <div className="text-black">(808) 555-0111 </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;