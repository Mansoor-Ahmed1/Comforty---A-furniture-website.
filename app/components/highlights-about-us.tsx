import React from 'react'
import { HiOutlineTrophy } from "react-icons/hi2";
import { SiTicktick } from "react-icons/si";

interface highlights {
    icon:string;
    title:string;
    text:string
}

const Highlights:React.FC<highlights> = (props) => {
  return (
    <div className='flex'>
        <div>{props.icon}</div>
        <div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Highlights