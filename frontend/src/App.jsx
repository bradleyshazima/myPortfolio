import React from 'react'
import './App.css'

import { About, Contact, Hero, Navbar, Projects, Tools, Footer } from './components'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tools />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App