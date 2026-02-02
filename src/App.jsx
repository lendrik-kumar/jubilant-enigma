import React from 'react'
import Navbar from './components/navbar.jsx'
import Hero from './components/Hero.jsx'
import Highlights from './components/Highlights.jsx'

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  )
}

export default App