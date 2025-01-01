import React from 'react';
import Image from 'next/image';

interface TopCategoriesProps {
    imageSrc: string;
    title: string;
    count: number;
}

const TopCategories: React.FC<TopCategoriesProps> = ({ imageSrc, title, count }) => {
    return (
        <div className="relative w-[325px] h-[300px] hover:cursor-pointer">
            
            <Image
                src={imageSrc}
                alt={title}
                width={325}
                height={300}
                className="object-cover w-full h-full rounded-lg"
            />

            <div className="absolute bottom-0 left-0 w-full h-[70px] bg-black/70 flex flex-col justify-center p-4 rounded-b-lg">
                <div className="text-white font-semibold text-lg">{title}</div>
                <div className="text-gray-300 text-sm">{count} Products</div>
            </div>
        </div>
    );
};

export default TopCategories;
