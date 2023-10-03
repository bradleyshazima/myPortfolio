import React from 'react'

import { services } from '../../constants'

const Service = () => {
  return (
    <div className='h-[400px] flex flex-col f-border rounded-lg bg-clip-padding p-10 relative'>
        <div className='w-full h-full bg-[#1220215e] backdrop-blur-sm bg-clip-padding rounded-lg absolute left-0 top-0 -z-[2]'></div>
        <div className='text-5xl txtbtncolor'><i class="fa-solid fa-pen-nib"></i></div>
        <h2 className='text-4xl mt-6 '></h2>
        <p className='text-base font-normal mt-3'></p>
    </div>
  )
}

export default Service