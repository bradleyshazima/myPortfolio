import React from 'react'
import './App.css'

import { About, Contact, Hero, Navbar, Projects, Tools } from './components'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tools />
      <Projects />
      <Contact />
    </>
  )
}

export default App