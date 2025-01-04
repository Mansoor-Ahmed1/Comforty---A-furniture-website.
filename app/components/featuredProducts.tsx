import Image from 'next/image';
import React from 'react';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
// Featured Products on HomePage
interface FeaturedProductsProps {
    imageSrc: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = (props) => {
    return (
        <div className='text-[#272343]'>
            <Image
                src={props.imageSrc}
                alt={"Product's inage"}
                width={225}
                height={54}
                className='hover:cursor-pointer'
            />
            <div className='flex justify-between'>
                <div className=''>
                    <div>Library Stool Chair</div>
                    <div className='px-1'>$20</div>
                </div>
                <AddShoppingCartOutlinedIcon fontSize='large' className="my-auto hover:cursor-pointer" />
            </div>
        </div>
    );
};

export default FeaturedProducts;