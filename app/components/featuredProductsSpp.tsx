import React from 'react'
import Image from 'next/image';
// Featured  Products on Single Product Page, spp-> single product page.

interface featuredProducts {
    imageSrc: string;
}

const FeaturedProductsSpp:React.FC<featuredProducts> = (props) => {
  return (
    <div className='w-[180px]'>
        <Image
        src={props.imageSrc}
        height={160}
        width={180}
        alt="Product's Image"
        />
        <div className='text-[#272343] flex justify-between'>
            <div>Library Stool Chair</div>
            <div className='font-bold'>$99</div>
        </div>

    </div>
  )
}

export default FeaturedProductsSpp