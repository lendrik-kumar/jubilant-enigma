import React from 'react'
import Navbar from './components/navbar.jsx'
import Hero from './components/Hero.jsx'
import VideoCarousel from './components/VideoCarousel.jsx'

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <section className="w-full common-padding bg-black">
        <div className="screen-max-width">
          <h2 className="section-heading text-center mb-10">Watch the highlights.</h2>
          <VideoCarousel />
        </div>
      </section>
    </main>
  )
}

export default App