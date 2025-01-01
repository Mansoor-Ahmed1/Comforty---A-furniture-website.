import React from "react";
import Image from "next/image";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
// bt ---> Black Title
interface newProductsProps {
    imageSrc: string;
}
const NewProductsbt: React.FC<newProductsProps> = (props) => {
  return (
    <div>
      <div className="text-[#272343]">
        <div className="absolute bg-[#01AD5A] rounded-lg m-2 px-2 text-white">
          New
        </div>
        <Image
          src={props.imageSrc}
          alt={"Chair's picture"}
          width={225}
          height={54}
          className="hover:cursor-pointer"
        />
        <div className="flex justify-between">
          <div className="">
            <div className="text-[#272343]">Library Stool Chair</div>
            <div className="px-1">$20</div>
          </div>
          <AddShoppingCartOutlinedIcon
            fontSize="large"
            className="my-auto text-[#029FAE] hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default NewProductsbt;