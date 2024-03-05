import React, { useRef, useState } from 'react'
import Card from './card'

function Foreground() {

    const ref = useRef(null);


    const data = [
       {desc: "Deserunt magna excepteur laboris ullamco excepteur.",
        fileSize: ".9 mb",
        close: true,
        tag: {
            isOpen: false,   tagTitle: "Download Now", tagColor: "red"
        }
        },

        {desc: "Deserunt magna excepteur laboris ullamco excepteur.",
        fileSize: ".9 mb",
        close: true,
        tag: {
            isOpen: true,   tagTitle: "Upload", tagColor: "green"
        }
        },

        {desc: "Deserunt magna excepteur laboris ullamco excepteur.",
        fileSize: ".9 mb",
        close: true,
        tag: {
            isOpen: true,   
            tagTitle: "Download Now", 
            tagColor: "green"
        }
        }
    ];

  return (
        <div ref={ref} className='fixed top-0 left-0 w-full h-full z-[3] flex gap-10 flex-wrap p-5'>
            {data.map((item, index)=>(
            <Card data={item} reference={ref} />
        ))}
        </div>
        
  )
}

export default Foreground