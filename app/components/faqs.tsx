import React from 'react'
import { IoAdd } from "react-icons/io5";

interface FAQS{
    question: string;
    answer: string;
}
const Faqs: React.FC<FAQS> = (props) => {
  return (  
    <div className='bg-[#F7F7F7]'>
        <div className='flex justify-between'>
            <div className='text-[#333333] font-bold p-3'>{props.question}</div>
            <div className='text-[#333333] text-4xl my-auto pr-2'><IoAdd /></div>
        </div>
        <div className='text-[#4F4F4F] p-3'>{props.answer}</div>
    </div>
  )
}

export default Faqs