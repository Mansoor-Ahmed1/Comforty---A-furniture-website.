import React from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";

interface cartItem {
  src: string;
}
const CartItem: React.FC<cartItem> = (props) => {
  return (
    <>
      <div className="flex">
        <div className="flex text-[#272343] justify-between border-b-2 pb-5 border-[#E5E5E5] mt-10 w-3/4">
          <div className="flex gap-x-5">
            <div>
              <Image
                src={props.src}
                alt="Item's Image"
                width={120}
                height={120}
              />
            </div>
            <div className="text-[#757575]">
              <div className="text-[#272343] text-2xl">Library Stool Chair</div>
              <div>Ashen Slate/Cobalt Bliss</div>
              <div className="flex justify-between">
                <div>Size: L</div>
                <div>Quantity: 1</div>
              </div>
              <div className="flex pt-5 gap-3">
                <div className="text-2xl">
                  <CiHeart />
                </div>
                <div className="text-xl">
                  <FaRegTrashCan />
                </div>
              </div>
            </div>
          </div>
          <div className="text-[#111111]">MRP: $99</div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
