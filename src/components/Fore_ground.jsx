import React, { useRef } from 'react';
import Box from './Box'

const Fore_ground = () => {
  const ref = useRef(null)
  const Data = [
    {
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non aspernatur suscipit doloremque nesciunt quidem',
      size: '0.4Mb',
      close: true,
      btn: true
    },
    {
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non aspernatur suscipit doloremque nesciunt quidem',
      size: '0.4Mb',
      close: false,
      btn: false
    },
    {
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non aspernatur suscipit doloremque nesciunt quidem',
      size: '0.4Mb',
      close: true,
      btn: true
    },
    {
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non aspernatur suscipit doloremque nesciunt quidem',
      size: '0.4Mb',
      close: false,
      btn: false
    },
  ]
  return (
   <>
    <div ref={ref} className="fore_ground d-flex gap-5">
       {
        Data.map((data)=>(
          <Box data={data} reference={ref}/>
        ))
       }
      </div>
   </>
  )
}

export default Fore_ground