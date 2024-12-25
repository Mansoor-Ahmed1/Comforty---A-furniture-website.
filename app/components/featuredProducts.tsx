import Image from 'next/image';
import React from 'react';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

interface FeaturedProductsProps {
    imageSrc: string;
    title: string;
    price: number;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = (props) => {
    return (
        <div className='text-[#272343]'>
            <Image
                src={props.imageSrc}
                alt={props.title}
                width={225}
                height={54}
            />
            <div className='flex justify-between'>
                <div className=''>
                    <div>{props.title}</div>
                    <div className='px-1'>${props.price}</div>
                </div>
                <AddShoppingCartOutlinedIcon fontSize='large' className="my-auto" />
            </div>
        </div>
    );
};

export default FeaturedProducts;