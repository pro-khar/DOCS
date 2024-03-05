import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
        <motion.div 
        dragConstraints={reference} 
        whileHover={{scale:1.05}}


        className='z-[3] flex-shrink-0 relative w-60 h-80 rounded-[10px] bg-zinc-700 text-white py-10 px-8 overflow-hidden'>
            <FaRegFileAlt />
            <p className='mt-5 text-sm leading-tight'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full  left-0'>
                <div className='flex items-center justify-between  py-3 px-8 mb-3'>
                    <h5>{data.fileSize}</h5>
                    <span className='w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-center'>
                        {data.close ? <IoIosClose/> : <FiDownload size="0.8em" color='#FFF'/> }
                    </span>
                </div>
                {
                    data.tag.isOpen ? (
                        <div className={`tag w-full p-4 ${"bg-"+data.tag.tagColor+"-600"} flex items-center justify-center`}>
                            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                        </div> 
                    ) : null
                }

                
            </div>
        </motion.div>
  )
}

export default Card