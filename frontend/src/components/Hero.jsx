import React from 'react'

const Hero = () => {
  return (
    <section className='h-[100vh]'>
        <div class="content">
            <h3>Hi! I'm Bradley</h3>
            <h1 id="hero-text">
                <span id="typed-text"></span>
                <span class="cursor" id="cursor"></span>
            </h1>
            <p>As a passionate and skilled web designer, I have honed my abilities in various aspects of the field. With expertise in full stack development, self-taught graphic design, and certification in UI/UX, I am dedicated to creating visually appealing and user-friendly websites. Let's collaborate and bring your digital vision to life!</p>
            <button id="hero-btn">Let's Talk</button>
        </div>
        <div class="myAvatar">
            <img src="/images/myAvatar.png" alt="My Avatar Image"></img>
        </div>
    </section>
  )
}

export default Hero