import React from 'react'
import './App.css'

import { About, Contact, Hero, Navbar, Projects, Stats, Tools } from './components'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Tools />
      <Projects />
      <Contact />
    </>
  )
}

export default App