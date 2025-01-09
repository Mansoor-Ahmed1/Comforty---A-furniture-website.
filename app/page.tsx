"use client";

import Image from "next/image";
import Header from "./components/Header";
import FeaturedProducts from "./components/featuredProducts";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import TopCategories from "./components/topCategories";
import Footer from "./components/Footer";
import NewProducts from "./components/newProducts";
import SaleProducts from "./components/saleProducts";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-[#F0F2F3] text-[#272343] w-3/4 h-2/6 mx-auto rounded-bl-3xl">
          <div className="flex">
            <div className="w-1/2 my-auto p-16 ">
              <div className="tracking-widest"> WELCOME TO CHAIRY</div>
              <div className="font-bold text-5xl">
                {" "}
                Best Furniture Collection For Your Interior.
              </div>
            </div>
            <div className="flex my-12 mx-auto">
              <Image
                className="m-auto"
                src="/images/mainHomePic.png"
                alt="sofa pic"
                height={400}
                width={252}
              />
            </div>
          </div>
        </div>
      </main>
      <div className="flex gap-20 w-3/4 mx-auto mt-8 ">
        <div>
          <Image src="/images/c1.png" alt="company1" width={65} height={4} />
        </div>
        <div>
          <Image src="/images/c2.png" alt="company2" width={65} height={4} />
        </div>
        <div>
          <Image src="/images/c3.png" alt="company3" width={65} height={4} />
        </div>
        <div>
          <Image src="/images/c4.png" alt="company4" width={65} height={4} />
        </div>
        <div>
          <Image src="/images/c5.png" alt="company5" width={65} height={4} />
        </div>
        <div>
          <Image src="/images/c6.png" alt="company6" width={65} height={4} />
        </div>
        <div>
          <Image src="/images/c7.png" alt="company7" width={65} height={4} />
        </div>
      </div>

      <div>
        <div className="text-[#272343] font-bold text-3xl w-3/4 mx-auto mt-10">
          Featured Products
        </div>

        <div className="flex gap-5 w-3/4 mx-auto mt-8">
          <NewProducts imageSrc="/images/fp1.png" />
          <SaleProducts imageSrc="/images/fp2.png" />
          <FeaturedProducts imageSrc="/images/fp3.png" />
          <FeaturedProducts imageSrc="/images/fp4.png" />
        </div>
      </div>

      <div>
        <div className="text-[#272343] font-bold text-3xl w-3/4 mx-auto mt-10">
          {" "}
          Top Categories{" "}
        </div>
        <div className="flex gap-5 w-3/4 mx-auto mt-8">
          <TopCategories
            imageSrc="/images/tc1.png"
            title="Wing Chair"
            count={3584}
          />
          <TopCategories
            imageSrc="/images/tc2.png"
            title="Wooden Chair"
            count={157}
          />
          <TopCategories
            imageSrc="/images/tc3.png"
            title="Desk Chair"
            count={154}
          />
        </div>
      </div>

      {/* w-3/4 mx-auto */}

      <div className=" h-[333px] flex w-3/4 mx-auto">
        <div
          className="rotate-180 text-[#000000] text-3xl mt-24 w-100 h-[140%]"
          style={{ writingMode: "vertical-rl" }}
        >
          Explore new and popular styles
        </div>
        <div className="flex gap-3 mt-32">
          <div className="w-1/2">
            <Image
              src={"/images/fp3.png"}
              width={512}
              height={150}
              alt="picleft"
              className="rounded-none "
            ></Image>
          </div>
          <div className="grid grid-cols-2 gap-4 w-1/2 rounded-none">
            <Image
              src={"/images/fp4.png"}
              width={260}
              height={160}
              alt="g1"
              className="rounded-none"
            ></Image>
            <Image
              src={"/images/fp1.png"}
              width={260}
              height={160}
              alt="g2"
              className="rounded-none"
            ></Image>
            <Image
              src={"/images/enaps1.jpg"}
              width={260}
              height={160}
              alt="g3"
              className="rounded-none"
            ></Image>
            <Image
              src={"/images/fp1.png"}
              width={260}
              height={160}
              alt="g4"
              className="rounded-none"
            ></Image>
          </div>
        </div>
      </div>

      <div className="text-[#272343] w-3/4 mx-auto mt-96">
        <div className="text-center font-bold text-3xl"> Our Products </div>

        <div className="grid grid-cols-4 gap-5  mt-8">
          <div className="text-[#272343]">
            <div className="absolute bg-[#01AD5A] rounded-lg m-2 px-2 text-white">
              New
            </div>
            <Image
              src={"/images/fp1.png"}
              alt={"Chair's picture"}
              width={225}
              height={54}
              className="hover:cursor-pointer"
            />
            <div className="flex justify-between">
              <div className="">
                <div className="text-[#007580]">Library Stool Chair</div>
                <div className="px-1">$20</div>
              </div>
              <AddShoppingCartOutlinedIcon
                fontSize="large"
                className="my-auto text-[#029FAE] hover:cursor-pointer"
              />
            </div>
          </div>
          <SaleProducts imageSrc="/images/fp2.png" />
          <FeaturedProducts imageSrc="/images/fp3.png" />
          <FeaturedProducts imageSrc="/images/fp4.png" />
          <NewProducts imageSrc="/images/tc1.png" />
          <SaleProducts imageSrc="/images/enaps1.jpg" />
          <FeaturedProducts imageSrc="/images/op1.png" />
          <FeaturedProducts imageSrc="/images/fp1.png" />
        </div>
      </div>
      <Footer />
    </>
  );
}
