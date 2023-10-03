import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className='w-full py-8 px-40 flex flex-col items-center justify-center'>
      <div className='w-[90%] m-8 rounded-lg bg-[#ffffff0d] p-16 f-border backdrop-blur addshadow'>
          <h2 className='text-3xl font-bold poppins'>Let's work together on your next project</h2>
          <div className='mt-8 w-full'>
              <p className='text-xl font-normal'>Email me at</p>
              <div className='h-16 rounded-lg bg-[#3f6f7133] w-4/5 px-8 flex items-center mt-4 text-lg font-light'><a href="mailto:bradleyshazima@gmail.com">bradleyshazima@gmail.com</a></div>
          </div>
      </div>
  </section>

  )
}

export default Contact