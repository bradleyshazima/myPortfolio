import React from 'react'

const Contact = () => {
  return (
    <section className="mt-32 px-16 py-20 t-border flex backdrop-blur-lg trans-div">
      <div className="w-full flex">
        <div className="flex flex-col justify-between mb-10 w-full shrink-0 md:mb-0 md:w-1/2 md:px-3 lg:px-6">
          <div>
            <h2 className="mb-6 text-3xl font-bold poppins">Hit me up</h2>
            <p className="mb-6 montserrat">If you made it to the contact section you must be interested in what we can do. Let's work together on your next project.</p>
          </div>

          <div className='w-full flex flex-col self-end'>
            <p className="mb-2 montserrat">Nairobi, Kenya</p>
            <p className="mb-2 montserrat">+254 797 423</p>
            <p className="mb-2 montserrat">bradleyshazima@gmail.com</p>
          </div>
        </div>

        <div className="mb-10 w-full shrink-0 md:mb-0 md:w-1/2 md:px-3 lg:px-6">
          <form>
            <div className="relative mb-6">
              <label className="poppins" for="exampleInput91">Name</label>
              <input type="text"
                className="flex items-center h-10 w-full rounded border-0 trans-div px-3 leading-[1.6] outline-none montserrat"
                placeholder="enter your name" />
            </div>

            <div className="relative mb-6">
              <label className="poppins" for="exampleInput91">Email address</label>
              <input type="email"
                className="flex items-center h-10 w-full rounded border-0 trans-div  px-3 leading-[1.6] outline-none montserrat"
                placeholder="yourname@example.com" />
            </div>

            <div className="relative mb-6" data-te-input-wrapper-init>
              <label for="#" className="poppins">Message</label>
              <textarea
                className="montserrat h-32 max-h-32 w-full rounded trans-div border-0 px-4 py-2 leading-[1.6] outline-none"
                id="#" placeholder="Your message..."></textarea>
            </div>

            <button type="submit"
              className="poppins mb-6 h-12 w-full rounded trans-div f-border backdrop-blur-lg px-6 pt-2.5 pb-2 text-base font-medium leading-normal addshadow">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact