import Image from "next/image";
import ChairIcon from '@mui/icons-material/Chair';
import DoneIcon from '@mui/icons-material/Done';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FeaturedProducts from "./components/featuredProducts";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

export default function Home() {
  return (

    <>
      <nav className="bg-[#272343] size-full h-11 flex p-2 pl-24" >
        <div className="flex">
          <DoneIcon />
          <div>  Free shipping on all orders over $50 </div>
        </div>
        <div className="flex gap-5 pr-24 ml-auto">
          <div className="flex">
            <div>Eng</div>
            <ExpandMoreIcon className="my-auto hover:cursor-pointer" />
          </div>
          <div>Faqs</div>
          <div className="flex">
            <HelpOutlineOutlinedIcon fontSize="small" className="my-auto hover:cursor-pointer" />
            <div>Need Help</div>
          </div>
        </div>
      </nav>
      <nav className="bg-[#F0F2F3] flex h-14 text-[#272343] justify-between items-center px-24 ">

        <div className="flex my-auto hover:cursor-pointer"><ChairIcon className="text-[#029FAE] my-auto" />
          <div className="my-auto text-2xl p-2"> Comforty</div>
        </div>

        <div className="bg-[#FFFFFF] py-1 px-2 flex gap-1 items-center rounded-lg hover:cursor-pointer">
          <ShoppingCartOutlinedIcon fontSize="inherit" className="my-auto" />
          <div>Cart</div>
          <div className="bg-[#007580] w-5 h-5 rounded-full mx-1 flex items-center justify-center text-white font-bold text-[10px]">
            2
          </div>

        </div>

      </nav>
      <nav className="bg-[FFFFFF] text-[#636270] flex justify-between px-24 py-5">
        <div className="flex gap-8 ">
          <div className="hover:text-[#029FAE] cursor-pointer">Home</div>
          <div className="hover:text-[#029FAE] cursor-pointer" >Shop</div>
          <div className="hover:text-[#029FAE] cursor-pointer" >Product</div>
          <div className="hover:text-[#029FAE] cursor-pointer" >Pages</div>
          <div className="hover:text-[#029FAE] cursor-pointer" >About</div>
        </div>
        <div className="flex gap-3">
          <div>Contact: </div>
          <div className="text-black">(808) 555-0111 </div>
        </div>
      </nav>
      <main>
        <div className="bg-[#F0F2F3] text-[#272343] w-3/4 h-2/6 mx-auto rounded-bl-3xl">

          <div className="flex">
            <div className="w-1/2 my-auto p-16 ">
              <div className="tracking-widest"> WELCOME TO CHAIRY</div>
              <div className="font-bold text-5xl"> Best Furniture Collection For Your Interior.</div>
            </div>
            <div className="flex my-12 mx-auto"><Image
              className="m-auto"
              src="/images/mainHomePic.png" alt="sofa pic" height={400} width={252} /></div>
          </div>
        </div>
      </main>
      <div className="flex gap-20 w-3/4 mx-auto mt-8 ">
        <div><Image src='/images/c1.png' alt='company1' width={65} height={4} /></div>
        <div><Image src='/images/c2.png' alt='company2' width={65} height={4} /></div>
        <div><Image src='/images/c3.png' alt='company3' width={65} height={4} /></div>
        <div><Image src='/images/c4.png' alt='company4' width={65} height={4} /></div>
        <div><Image src='/images/c5.png' alt='company5' width={65} height={4} /></div>
        <div><Image src='/images/c6.png' alt='company6' width={65} height={4} /></div>
        <div><Image src='/images/c7.png' alt='company7' width={65} height={4} /></div>
      </div>


      <div>
        <div className="text-[#272343] font-bold text-3xl w-3/4 mx-auto mt-10"> Featured Products
        </div>

        <div className="flex gap-5 w-3/4 mx-auto mt-8">
          <div className='text-[#272343]'>
            <Image
              src={"/images/fp1.png"}
              alt={"Chair's picture"}
              width={225}
              height={54}
            />
            <div className='flex justify-between'>
              <div className=''>
                <div className="text-[#007580]">Library Stool Chair</div>
                <div className='px-1'>$20</div>
              </div>
              <AddShoppingCartOutlinedIcon fontSize='large' className="my-auto text-[#029FAE]" />
            </div>
          </div>

          <div className='text-[#272343]'>
            <Image
              src={"/images/fp2.png"}
              alt={"Chair's picture"}
              width={225}
              height={54}
            />
            <div className='flex justify-between'>
              <div className=''>
                <div>Library Stool Chair</div>
                <div className="flex">
                  <div className='px-1'>$20</div>
                  <div className="line-through text-[#9A9CAA]">$30</div>
                </div>

              </div>
              <AddShoppingCartOutlinedIcon fontSize='large' className="my-auto" />
            </div>
          </div>
          <FeaturedProducts imageSrc="/images/fp3.png" title="Library Stool Chair" price={20} />
          <FeaturedProducts imageSrc="/images/fp4.png" title="Library Stool Chair" price={20} />
        </div>
      </div>
    </>

  );
}