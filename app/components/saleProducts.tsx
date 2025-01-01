import React from 'react'
import Image from 'next/image'
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

interface saleProductsProps {
    imageSrc : string;
}

const SaleProducts:React.FC<saleProductsProps> = (props) => {
  return (
    <div>
         <div className="text-[#272343]">
            <div className="absolute bg-[#F5813F] rounded-lg m-2 px-2 text-white">
              Sales
            </div>
            <Image
              src={props.imageSrc}
              alt={"Product's picture"}
              width={225}
              height={54}
              className="hover:cursor-pointer"
            />
            <div className="flex justify-between">
              <div>
                <div>Library Stool Chair</div>
                <div className="flex">
                  <div className="px-1">$20</div>
                  <div className="line-through text-[#9A9CAA]">$30</div>
                </div>
              </div>
              <AddShoppingCartOutlinedIcon
                fontSize="large"
                className="my-auto hover:cursor-pointer"
              />
            </div>
          </div>
    </div>
  )
}

export default SaleProducts